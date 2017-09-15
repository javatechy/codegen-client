import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as AppUtils from '../utils/app.utils';
import {Injectable} from '@angular/core';

@Injectable()
export class FormService {

  constructCardDetailsForm(form: FormBuilder, isSaved: boolean, panView?: any, expiryMonth?: any, expiryYear?: any) {
    if (isSaved) {
      return form.group({
        cardNumber: [{value: 'XXXX XXXX XXXX ' + panView, disabled: 'true'}],
        dateOfExpiry: [{value: expiryMonth + '/' + expiryYear, disabled: 'true'}],
        cvv: ['', [Validators.required, Validators.minLength(3), Validators.pattern(AppUtils.VALIDATION_PATTERN_CARD_CVV)]],
        saveCardDetails: ['true']
      });
    } else {
      return form.group({
        cardNumber: ['',
          [Validators.required, Validators.minLength(19),
            Validators.pattern(AppUtils.VALIDATION_PATTERN_NON_VERVE)
          ]],
        dateOfExpiry: ['', [Validators.required, Validators.minLength(5), Validators.pattern(AppUtils.VALIDATION_PATTERN_CARD_EXPIRY)]],
        cvv: ['', [Validators.required, Validators.minLength(3), Validators.pattern(AppUtils.VALIDATION_PATTERN_CARD_CVV)]],
        saveCardDetails: ['true']
      });
    }
  }
  constructEditUserForm(form: FormBuilder, authUser: any): FormGroup {
    return form.group({
      firstName: [authUser.firstName, Validators.required],
      lastName: [authUser.lastName, Validators.required],
      msisdn: [{value: authUser.msisdn, disabled: 'true'}],
      emailId: [authUser.emailId, Validators.required]
    });
  }
  constructSignUpForm(form: FormBuilder, userMsisdn: any): FormGroup {
    return form.group({
      emailId: [''],
      firstName: [''],
      lastName: [''],
      msisdn: [userMsisdn, [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_MOBILE)]]
    });
  }
  constructRefundForm(form: FormBuilder): FormGroup {
    return form.group({
      refundType: ['REFUND'],
    });
  }
  constructFeedbackForm(form: FormBuilder): FormGroup {
    return form.group({
      feedback: ['', Validators.required]
    });
  }
  constructApplyCouponForm(form: FormBuilder): FormGroup {
    return form.group({
      cCode: ['', Validators.required]
    });
  }
  constructChangePinForm(form: FormBuilder): FormGroup {
    return form.group({
      oldPin: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP)]],
      newpin: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP)]],
      new_re_pin: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP)]]
    });
  }
  constructAddMoneyForm(form: FormBuilder): FormGroup {
    return form.group({
      addM: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_AMOUNT)]]
    });
  }
  constructCreatePinForm(form: FormBuilder): FormGroup { return form.group({
    p0: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_FIRST_DIGIT)]],
    p1: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_DIGIT)]],
    p2: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_DIGIT)]],
    p3: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_DIGIT)]]
  });
  }
  constructEnterPinForm(form: FormBuilder): FormGroup {
    return form.group({
      p0: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_FIRST_DIGIT)]],
      p1: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_DIGIT)]],
      p2: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_DIGIT)]],
      p3: ['', [Validators.required, Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP_DIGIT)]]
    });
  }
  constructOtpForm(form: FormBuilder): FormGroup {
    return form.group({
      otp: ['', [Validators.required, Validators.minLength(4), Validators.pattern(AppUtils.VALIDATION_PATTERN_OTP)]]
    });
  }
  constructSignInMsisdnForm(form: FormBuilder, msisdn: string, validationPattern: any, validationPattern2?: any): FormGroup {
    if (!validationPattern2) {
      return form.group({
        msisdn: [msisdn, [Validators.required, Validators.pattern(validationPattern)]],
      });
    } else {
      return form.group({
        msisdn: [msisdn, [Validators.required, Validators.pattern(validationPattern) || Validators.pattern(validationPattern2)]],
      });
    }
  }
}
