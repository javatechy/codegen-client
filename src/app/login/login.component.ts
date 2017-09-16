import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {HelperService} from '../services/helper.service';
import {FormService} from '../services/form.service';
import * as AppUtils from '../utils/app.utils';
import {Common} from '../utils/Common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./app.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'FabWallet';
  loginForm: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private route: ActivatedRoute,
              public form: FormBuilder, private helperService: HelperService, private formService: FormService) {

    this.loginForm = form.group({
      'userName': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      if (this.loginService.getUserStatus() === 'Z000') {
      } else if (this.loginService.getUserStatus() === 'Z004') {
      } else {
        this.router.navigate(['/user']);
      }
    } else {
      Common.removeItem(AppUtils.SS_USER_STATUS);
    }

  }

  submitLoginForm(post) {
    // alert(JSON.stringify(post));
    this.loginService.authenticate(post.userName, post.password).subscribe(customResponse => {
      alert(JSON.stringify(customResponse));
      if (customResponse.status === '200') {
        
      }
    });
    // this.router.navigate(['/user']);
  }

}
