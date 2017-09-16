import { environment } from '../../environments/environment';
// Headers HTTP
export const HEADER_X_DIGEST = 'X-Digest';
export const HEADER_X_ONCE = 'X-Once';
export const HEADER_WWW_AUTHENTICATE = 'WWW-Authenticate';
export const CSRF_CLAIM_HEADER = 'X-HMAC-CSRF';

// Local storage keys
export const STORAGE_ACCOUNT_TOKEN = 'hmacApp-account';
export const STORAGE_HMAC_APP_JWT = 'hmac-app-jwt';

// Validation

export const VALIDATION_PATTERN_MOBILE_ZERO: any = /^[0][789]\d{9}$/;
export const VALIDATION_PATTERN_MOBILE: any = /^[789]\d{9}$/;
export const VALIDATION_PATTERN_START: any = /^[789]$/;
export const VALIDATION_PATTERN_START_Z: any = /^[0][789]$/;
export const VALIDATION_PATTERN_OTP_FIRST_DIGIT: any = /^[1-9]$/;    // for non-zero digit
export const VALIDATION_PATTERN_OTP_DIGIT: any = /^[0-9]$/;
export const VALIDATION_PATTERN_AMOUNT: any = /^\d{1,}$/;
export const VALIDATION_PATTERN_USER_PIN: any = /^[0-9][0-9][0-9][0-9]$/;
export const VALIDATION_PATTERN_CARD_CVV: any = /^[0-9][0-9][0-9]$/;
export const VALIDATION_PATTERN_VERVE_PIN: any = /^[0-9][0-9][0-9][1-9][0-9][0-9]$/;
export const VALIDATION_PATTERN_BANK_PIN: any = /^\d{4}$/;
export const VALIDATION_PATTERN_CARD_EXPIRY: any = /^[0][1-9]|[1][0-2][- /.][1-9][0-9]$/;
export const VALIDATION_PATTERN_NON_VERVE: any = /^[0-9]{4}[- /][0-9]{4}[- /][0-9]{4}[- /][0-9]{4}$/;

export const VALIDATION_PATTERN_VERVE: any = /^[0-9]{4}[- /][0-9]{4}[- /][0-9]{4}[- /][0-9]{4}[- /][0-9]{3}$/;
export const VALIDATION_PATTERN_OTP: any = /^\d{4}$/;
export const VALIDATION_PATTERN_EMAIL: any = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const VALIDATION_PATTERN_NAME: any = /^[A-Za-z_]{1,}$/;


// Common http root api
export const BACKEND_API_PATH = '/api';
export const BACKEND_API_AUTHENTICATE_PATH = '/authenticate';
export const BACKEND_BASE_URL = environment.apiUrl;

// export const BACKEND_BASE_URL='http://localhost:7070';
export const BACKEND_API_VCID: string = BACKEND_BASE_URL + '/api/open';
export const BACKEND_API_AUTH: string = BACKEND_BASE_URL + '/fab/authenticate';
export const BACKEND_API_ONBD: string = BACKEND_BASE_URL + '/api/register';
export const BACKEND_API_RKTN: string = BACKEND_BASE_URL + '/api/open';
export const BACKEND_API_REFRESH_TOKEN: string = BACKEND_BASE_URL + '/api/refresh';
// statues
export const BE_STATUS_SUCCESS = '200';
export const BE_STATUS_FAILURE = '500';
export const BE_STATUS_BLOCKED_USER = 'Z001';

export const OPCODE_ONBD = 'ONBD';
export const OPCODE_RKTN = 'RKTN';
// local Storage constants
export const LS_USER_STATUS = 'USER_STATUS';
export const LS_ACCESS_TOKEN = 'ACCESS_TOKEN';
export const LS_REFRESH_TOKEN = 'REFRESH_TOKEN';
export const LS_LOGIN_MSISDN = 'LOGIN_MSISDN';
export const LS_LOGGED_IN_USER = 'LOGGED_IN_USER';
export const LS_IS_SIGNED_UP = 'IS_SIGNED_UP';
// Session Storage Constants
export const SS_USER_STATUS = 'LS_USER_STATUS';
export const SS_LOGIN_MSISDN = 'LS_LOGIN_MSISDN';
export const SS_LOGGED_IN_USER = 'LS_LOGGED_IN_USER';
export const SS_IS_SIGNED_UP = 'LS_IS_SIGNED_UP';
// export const SS_DIRECT_SIGN_IN = "SS_DIRECT_SIGN_IN";

export class
UrlMatcher {
  public static matches(url: string): boolean {
    // return true;.
    return url.indexOf(BACKEND_API_PATH) !== -1
      && url.indexOf(BACKEND_API_PATH + BACKEND_API_AUTHENTICATE_PATH) === -1;
  }
}
// Mixpanel Project Token
export const MIXPANEL_TOKEN = '60e3c79cec40f179f650312f1ce03823';

