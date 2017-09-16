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

import { RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import {isNullOrUndefined} from 'util';
@Injectable()
export class HelperService {

  response: CustomResponse;

  constructor(private http: Http,
              private router: Router, private location: Location, private jsonp: Jsonp) {
  }


  post(url: string, customRequest: CustomRequest): Observable<CustomResponse> {
    AppLogger.log('Custom Request=======> ', customRequest);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Allow-Cross-Origin', '*');
    const bodySend = JSON.parse(JSON.stringify(customRequest));
    return this.http.post( url, bodySend, headers).map(res => res.json());
  }

  get(url: string): Observable<CustomResponse> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Allow-Cross-Origin', '*');
    return this.http.get( url, headers).map(res => res.json());
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
    AppLogger.log('[ HTTP CLIENT] inside catch', res.status);
    AppLogger.log('[ HTTP CLIENT] clearing local storage');
    observer.complete();
  }

  httpPost(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
   // this.addSecurityHeader(url, 'POST', options);
    AppLogger.log('[ HTTP CLIENT]Inside  POST HEADER', options);
    AppLogger.log('[ HTTP CLIENT]Options body ', body);
    AppLogger.log('[ HTTP CLIENT]Options url ', url);
    return Observable.create((observer: Observer<Response>) => {
      this.http.post(url, body, options)
        .subscribe((res: Response) => {
          AppLogger.log('[ HTTP CLIENT]  headers' + JSON.stringify(res.headers));
          this.mapResponse(res, observer);
        }, (res: Response) => {
          AppLogger.log('[ HTTP CLIENT] above catch', res);
          this.catchResponse(res, observer);
        });
    });
  }

  mapResponse(res: Response, observer: Observer<Response>): void {
    if (res.ok && res.headers) {
      AppLogger.log(' . Headers: ' + JSON.stringify(res.headers));
    }
    observer.next(res);
    observer.complete();
  }

  clear() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
