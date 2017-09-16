import {Component, OnInit} from '@angular/core';
import {HelperService} from '../services/helper.service';
import * as AppUtils from '../utils/app.utils';
import {Common} from '../utils/Common';
import {Transaction, User} from '../model/CustomResponse';
import 'rxjs/add/observable/of';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [HelperService],
})
export class AdminComponent implements OnInit {
  users: User[];
  transactions: Transaction[];

  constructor(private helperService: HelperService) {
  }

  ngOnInit() {
    if (Common.getStorage(AppUtils.LS_USER_ROLE) === AppUtils.ROLE_ADMIN) {
      this.helperService.get(AppUtils.BACKEND_API_USERS).subscribe(customResponse => {
        if (customResponse.status === AppUtils.BE_STATUS_SUCCESS) {
          this.users = customResponse.users;
          this.helperService.openSnackBar(JSON.stringify(customResponse.users));

        } else {
          this.helperService.openSnackBar('Error While fetching users list : ' + customResponse.error.message);
        }
      });
      this.helperService.get(AppUtils.BACKEND_API_TRANSACTIONS).subscribe(customResponse => {
        if (customResponse.status === AppUtils.BE_STATUS_SUCCESS) {
          this.users = customResponse.users;
          this.helperService.openSnackBar(JSON.stringify(customResponse.users));
        } else {
          this.helperService.openSnackBar('Error While fetching users list : ' + customResponse.error.message);
        }
      });
    }
  }

  getBalance(userId: number) {
    this.helperService.get(AppUtils.BACKEND_API_BALANCE + userId).subscribe(customResponse => {
      if (customResponse.status === AppUtils.BE_STATUS_SUCCESS) {
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

