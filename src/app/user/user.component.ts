import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {HelperService} from '../services/helper.service';
import {FormService} from '../services/form.service';
import * as AppUtils from '../utils/app.utils';
import {Common} from '../utils/Common';
import {Balance, User} from '../model/CustomResponse';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [HelperService],
})

export class UserComponent implements OnInit {
  user: User;
  balance: Balance;
  walletBalance: Number;

  constructor(private router: Router, private loginService: LoginService, private route: ActivatedRoute,
              public form: FormBuilder, private helperService: HelperService, private formService: FormService) {
  }

  ngOnInit() {
    if (Common.getStorage(AppUtils.LS_USER_ROLE) === AppUtils.ROLE_NON_ADMIN) {
      this.getBalance(Common.getStorage(AppUtils.LS_USER_ID));
    } else {
      this.helperService.openSnackBar('Please login again!!');
    }
  }

  getBalance(userId: number) {
    this.helperService.get(AppUtils.BACKEND_API_BALANCE + userId).subscribe(customResponse => {
      if (customResponse.status === AppUtils.BE_STATUS_SUCCESS) {
        this.walletBalance = customResponse.balance.balance;
        this.helperService.openSnackBar('Balance Is :' + customResponse.balance.balance);
      } else {
        this.helperService.openSnackBar('Error While fetching balance : ' + customResponse.error.message);
      }
    });
  }

  logOut() {
    this.helperService.clear();
  }
}


