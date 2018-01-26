import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {HelperService} from '../services/helper.service';
import * as AppUtils from '../utils/app.utils';
import {Common} from '../utils/Common';
import {CustomRequest, Database, Logging, Properties, Controller} from '../model/CustomRequest';

@Component({
  selector: 'app-login',
  templateUrl: './code.component.html',
})
/**
 * Handles all project Creation Tasks
 */
export class CodeComponent implements OnInit {
  title = 'FabWallet';
  codeForm: FormGroup;
  request = new CustomRequest();


  constructor(private router: Router, private loginService: LoginService, private route: ActivatedRoute,
              public form: FormBuilder, private helperService: HelperService) {
    this.codeForm = form.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    if (!this.loginService.isAuthenticated()) {
      localStorage.clear();
      sessionStorage.clear();
    }
  }

  submitCodeForm(request) {
    this.helperService.openSnackBar('CUSTOME REQ => ' + JSON.stringify(this.request));
  }

  submitRequest() {
    this.helperService.openSnackBar(JSON.stringify(this.request));
    this.helperService.post(AppUtils.BACKEND_API_PROJECT, this.request).subscribe(customResponse => {
      if (customResponse.status === AppUtils.BE_STATUS_SUCCESS) {
        this.helperService.openSnackBar('Login Successfull');
      } else {
        this.helperService.openSnackBar('Login Failed with Error message : ' + customResponse.error.message);
      }
    });

  }

}
