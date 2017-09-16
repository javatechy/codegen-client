import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {HelperService} from '../services/helper.service';
import {FormService} from '../services/form.service';
import * as AppUtils from '../utils/app.utils';
import {Common} from '../utils/Common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [HelperService],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService, private route: ActivatedRoute,
              public form: FormBuilder, private helperService: HelperService, private formService: FormService) {
  }

  ngOnInit() {
    if (Common.getStorage(AppUtils.LS_USER_ROLE) === AppUtils.ROLE_ADMIN) {
      this.helperService.get(AppUtils.BACKEND_API_USERS).subscribe(customResponse => {
        if (customResponse.status === AppUtils.BE_STATUS_SUCCESS) {
        } else {
          this.helperService.openSnackBar('Error While fetching users list : ' + customResponse.error.message);
        }
      });
    }
  }
}

