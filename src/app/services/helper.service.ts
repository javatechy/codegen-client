import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as AppUtils from '../utils/app.utils';
import {NavigationEnd, Router} from '@angular/router';
import {Http, Response, RequestOptionsArgs, Headers, Jsonp} from '@angular/http';
import {AppLogger} from '../utils/AppLogger';
import {Common} from '../utils/Common';
import {CustomRequest} from '../model/CustomRequest';
import {CustomResponse, Error} from '../model/CustomResponse';
import {Location} from '@angular/common';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import {isNullOrUndefined} from 'util';
@Injectable()
export class HelperService {

  response: CustomResponse;

  constructor(private http: Http,
              private router: Router, private location: Location, private jsonp: Jsonp) {
  }


  post(url: string, customRequest: CustomRequest): Observable<CustomResponse> {
    customRequest.oAuth.accessToken = Common.getStorage(AppUtils.LS_ACCESS_TOKEN);
    AppLogger.log('custom request');
    AppLogger.log('inside POST wiith URL' + url);
    AppLogger.log(customRequest);
    return this.httpPost(url, JSON.stringify(customRequest), Common.createHeader())
      .map((res: Response) => {
        AppLogger.log('[LoginService] JSON ::: ' + JSON.stringify(res.json()));
        const customResponse: CustomResponse = res.json();
        AppLogger.log('Resetting access token status', customResponse.status);
        AppLogger.log('[HELPER SERVICE] HTTP STATUS' + res.status);
        if (customResponse.status === 'J401') {
          AppLogger.log('We Got an error in htttp J401');
          this.getRefreshToken(customResponse, url, customRequest).subscribe(customResponseRefresh => {
            AppLogger.log('Fetching saved instruments', customResponseRefresh);
            AppLogger.log('[HURAAYYYYYYYYYYYYYYYYYYYYYYYY] ', customResponseRefresh);
            if (customResponseRefresh.status === 'Z200') {
              AppLogger.log('[HURAAYYYYYYYYYYYYYYYYYYYYYYYY] ');
              Common.setStorage(AppUtils.STORAGE_HMAC_APP_JWT, customResponseRefresh.jwt);
              Common.setStorage(AppUtils.LS_REFRESH_TOKEN, customResponseRefresh.refreshToken);
              window.location.reload();
            }else {
              this.clear();
            }
          });
        }
        if (customResponse.status === AppUtils.BE_STATUS_FAILURE && !isNullOrUndefined(customResponse.error)) {
          const errorCode = customResponse.error.code;
          if (errorCode.startsWith('J403') || errorCode.startsWith('O201') || errorCode.startsWith('O202')
            || errorCode.startsWith('O204') || errorCode.startsWith('J103')) {
            this.clear();
          }
        } else {
          AppLogger.log('ressetting access token inside helper');
          if (!isNullOrUndefined(customResponse.oAuth)) {
            Common.setStorage(AppUtils.LS_ACCESS_TOKEN, customResponse.oAuth.accessToken);
          }
          if (!isNullOrUndefined(customResponse.jwt)) {
            Common.setStorage(AppUtils.STORAGE_HMAC_APP_JWT, customResponse.jwt);
            Common.setStorage(AppUtils.LS_REFRESH_TOKEN, customResponse.refreshToken);
          }
        }
        return customResponse;
      }, /*err => AppLogger.log('We Got an error in htttp' + err)*/);
  }

  getRefreshToken(res: CustomResponse, url: string, customRequest: CustomRequest): Observable<CustomResponse>  {
    AppLogger.log('Logging inside refresh Token');
    const custRefereshRequest = new CustomRequest();
    custRefereshRequest.jwt = res.jwt;
    custRefereshRequest.refreshToken  = Common.getStorage(AppUtils.LS_REFRESH_TOKEN);
    return this.post(AppUtils.BACKEND_API_REFRESH_TOKEN, custRefereshRequest);
  }

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigate(['/user']);
  }
  goLogin() {
    this.router.navigate(['/login']);
  }

  goHomeAndClearData() {
    this.goBack();
  }

  handleException(message: string, ex: any) {
    AppLogger.log('Exception Occured in ' + message, ex);
    this.goHome();
  }

  addSecurityHeader(url: string, method: string, options: RequestOptionsArgs): void {
    if (AppUtils.UrlMatcher.matches(url)) {
      AppLogger.log('[hmac.addSecurityHeader]CSRF_CLAIM_HEADER token => ' + Common.getStorage(AppUtils.CSRF_CLAIM_HEADER));
      AppLogger.log('[hmac.addSecurityHeader]METHOD NAME => ' + method);
      const date: string = new Date().toISOString();
      options.headers.set(AppUtils.CSRF_CLAIM_HEADER, Common.getStorage(AppUtils.CSRF_CLAIM_HEADER));
      options.headers.set(AppUtils.HEADER_X_ONCE, date);
      options.headers.set(AppUtils.STORAGE_HMAC_APP_JWT, Common.getStorage(AppUtils.STORAGE_HMAC_APP_JWT));
      AppLogger.log('[hmac.addSecurityHeader] url' + url);
      AppLogger.log('[hmac.addSecurityHeader] hmac message HEADER_X_DIGEST' + options.headers.get(AppUtils.HEADER_X_DIGEST));
      AppLogger.log('[hmac.addSecurityHeader] JWT HMACH  TOKEN' + Common.getStorage(AppUtils.STORAGE_HMAC_APP_JWT));
    }

  }

  setOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) {
      options = {};
    }
    if (!options.headers) {
      options.headers = new Headers();
    }
    return options;
  }

  catchResponse(res: Response, observer: Observer<Response>): void {
    AppLogger.log('[HMAC HTTP CLIENT] inside catch', res.status);
    AppLogger.log('[HMAC HTTP CLIENT] clearing local storage');
    observer.complete();
  }

  httpPost(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.setOptions(options);
    this.addSecurityHeader(url, 'POST', options);
    AppLogger.log('[HMAC HTTP CLIENT]Inside  POST HEADER', options);
    AppLogger.log('[HMAC HTTP CLIENT]Options body ', body);
    AppLogger.log('[HMAC HTTP CLIENT]Options url ', url);
    return Observable.create((observer: Observer<Response>) => {
      this.http.post(url, body, options)
        .subscribe((res: Response) => {
          AppLogger.log('[HMAC HTTP CLIENT]  headers' + JSON.stringify(res.headers));
          this.mapResponse(res, observer);
        }, (res: Response) => {
          AppLogger.log('[HMAC HTTP CLIENT] above catch', res);
          this.catchResponse(res, observer);
        });
    });
  }

  mapResponse(res: Response, observer: Observer<Response>): void {
    if (res.ok && res.headers) {
      AppLogger.log('HMAC_mapResponse . Headers: ' + JSON.stringify(res.headers));
    }
    observer.next(res);
    observer.complete();
  }

  getUserInfo() {
    return this.jsonp.get('//freegeoip.net/json/?format=jsonp&callback=JSONP_CALLBACK')
      .map(res => res.json());
  }

  clear() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
