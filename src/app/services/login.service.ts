import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as AppUtils from '../utils/app.utils';
import {Router, ActivatedRoute} from '@angular/router';
import {Response, Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {AppLogger} from '../utils/AppLogger';
import {Common} from '../utils/Common';
import {CustomResponse} from '../model/CustomResponse';
import {HelperService} from './helper.service';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router,
              private route: ActivatedRoute, private helperService: HelperService) {
  }

  vcid(msisdn: string): Observable<CustomResponse> {
    AppLogger.log('[VCID]  mssidn' + msisdn);
    const cs = Common.create('VCID');
    cs.user.msisdn = msisdn;
    return this.helperService.post(AppUtils.BACKEND_API_VCID, cs);
  }

  auth(msisdn: string, otp: string): Observable<CustomResponse> {
    AppLogger.log('[LoginService AUTH]  authenticate' + msisdn);
    const cs = Common.create('AUTH');
    cs.user.msisdn = msisdn;
    cs.user.password = otp;
    cs.oAuth.accessToken = Common.getStorage(AppUtils.LS_ACCESS_TOKEN);
    // let url='http://52.209.79.99:7070/auth/authenticate';
    return this.http.post(AppUtils.BACKEND_API_AUTH, JSON.stringify(cs), Common.createHeader())
      .map((res: Response) => {
        const d: CustomResponse = res.json();
        // d.user.isPinSet = false;
        if (d.status === AppUtils.BE_STATUS_SUCCESS) {
          AppLogger.log('[LoginService] JSON ::: ' + JSON.stringify(res.json()));
          AppLogger.log('[LoginService] HEADER_X_SECRET ::: ' + JSON.stringify(res.headers));
          AppLogger.log('[LoginService] HEADER_WWW_AUTHENTICATE ::: ' + res.headers.get(AppUtils.HEADER_WWW_AUTHENTICATE));
          Common.setStorage(AppUtils.CSRF_CLAIM_HEADER, res.headers.get(AppUtils.CSRF_CLAIM_HEADER));
          Common.setStorage(AppUtils.STORAGE_ACCOUNT_TOKEN, res.text());
          Common.setStorage(AppUtils.STORAGE_HMAC_APP_JWT, res.headers.get(AppUtils.STORAGE_HMAC_APP_JWT));
          AppLogger.log('[LoginService] CSRF_CLAIM_HEADER ' + res.headers.get(AppUtils.CSRF_CLAIM_HEADER));
          AppLogger.log('[LoginService] STORAGE_ACCOUNT_TOKEN ' + res.text());
          AppLogger.log('[LoginService] HMAC AUTH JWT ' + res.headers.get(AppUtils.STORAGE_HMAC_APP_JWT));
          d.user.msisdn = Common.getStorage(AppUtils.SS_LOGIN_MSISDN);
          Common.setStorage(AppUtils.SS_LOGGED_IN_USER, d.user);
          AppLogger.log('Logged in user ' + Common.getStorage(AppUtils.SS_LOGGED_IN_USER));
          Common.setStorage(AppUtils.LS_ACCESS_TOKEN, d.oAuth.accessToken);
          Common.setStorage(AppUtils.LS_REFRESH_TOKEN, res.headers.get('refresh-token'));
        }

        return d;
      });
  }


  onbd(firstName: string, lastName: string, emailId: string, msisdn: string): Observable<CustomResponse> {
    AppLogger.log('[VCID]  mssidn' + msisdn);
    const cs = Common.create(AppUtils.OPCODE_ONBD);
    cs.user.msisdn = msisdn;
    cs.user.emailId = emailId;
    cs.user.firstName = firstName;
    cs.user.lastName = lastName;
    return this.helperService.post(AppUtils.BACKEND_API_ONBD, cs);
  }

  isAuthenticated(): boolean {
    const userStatus = Common.getStorage(AppUtils.SS_USER_STATUS);
    const isSignedUp = Common.getStorage(AppUtils.SS_IS_SIGNED_UP);

    if (isSignedUp === 'false') {
      AppLogger.log('Inside isAuthenticated');
      return false;
    } else if (isSignedUp === 'true') {
      return true;
    } else {
      return !!Common.getStorage(AppUtils.STORAGE_ACCOUNT_TOKEN);
    }
  }

  removeAccount(): void {
    Common.removeItem(AppUtils.STORAGE_ACCOUNT_TOKEN);
    Common.removeItem(AppUtils.CSRF_CLAIM_HEADER);
  }

  getUserStatus(): string {
    const status = Common.getStorage(AppUtils.SS_USER_STATUS);
    AppLogger.log('');
    if (status === AppUtils.BE_STATUS_BLOCKED_USER) {
    //  this.errorHandlerService.openSnackBar('You are a blocked user. Please contact Support');
      return '';
    }
    return status;
  }

  logoutButton(): void {
    const cs = Common.create(AppUtils.OPCODE_RKTN);
    this.helperService.post(AppUtils.BACKEND_API_RKTN, cs).subscribe();
    AppLogger.log('Logging out via button');
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    this.router.navigate(['user']);
  }

}
