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

  authenticate(userName: string, password: string): Observable<CustomResponse> {
    AppLogger.log('UserName  and pass' + userName + 'Password' + password);
    const cs = Common.create();
    cs.userName = userName;
    cs.password = password;
    return this.helperService.post(AppUtils.BACKEND_API_AUTH, cs);
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
    const cs = Common.create();
    this.helperService.post(AppUtils.BACKEND_API_RKTN, cs).subscribe();
    AppLogger.log('Logging out via button');
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
    this.router.navigate(['user']);
  }

}
