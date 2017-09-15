import { environment } from '../../environments/environment';
// Headers HTTP
export const HEADER_X_SECRET = 'X-Secret';
export const HEADER_X_TOKEN_ACCESS = 'X-TokenAccess';
export const HEADER_X_DIGEST = 'X-Digest';
export const HEADER_X_ONCE = 'X-Once';
export const HEADER_WWW_AUTHENTICATE = 'WWW-Authenticate';
export const HEADER_AUTHENTICATION = 'Authentication';
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
export const BACKEND_API_TRANSACTION_SERVICE: string = BACKEND_BASE_URL + '/api/services/transaction';
export const BACKEND_API_SUPPORT_SERVICE: string = BACKEND_BASE_URL + '/api/services/support';
export const BACKEND_API_OPEN_SERVICE: string = BACKEND_BASE_URL + '/api/open';
export const BACKEND_API_FORGET_PIN_SERVICE: string = BACKEND_BASE_URL + '/api/services/secure';
export const BACKEND_API_ROOT_URL: string = BACKEND_BASE_URL + BACKEND_API_PATH;
export const BACKEND_API_VCID: string = BACKEND_BASE_URL + '/api/open';
export const BACKEND_API_AUTH: string = BACKEND_BASE_URL + '/auth/authenticate';
export const BACKEND_API_ONBD: string = BACKEND_BASE_URL + '/api/register';
export const BACKEND_API_SVDINS: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_FTORR: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_TRHIS: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_MDSA: string = BACKEND_BASE_URL + '/api/services/master';
export const BACKEND_API_RECHG: string = BACKEND_BASE_URL + '/api/services/user';
export const BACKEND_API_RCSTS: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_REINS: string = BACKEND_BASE_URL + '/api/supportservice';
export const BACKEND_API_UUSPR: string = BACKEND_BASE_URL + '/api/services/support';
export const BACKEND_API_STPIN: string = BACKEND_BASE_URL + '/api/services/support';
export const BACKEND_API_PBPREF: string = BACKEND_BASE_URL + '/api/services/support';
export const BACKEND_API_RKTN: string = BACKEND_BASE_URL + '/api/open';
export const BACKEND_API_UUSPR_EML: string = BACKEND_BASE_URL + '/api/services/secure';
export const BACKEND_API_GEOTP: string = BACKEND_API_FORGET_PIN_SERVICE;
export const BACKEND_API_AUOTP: string = BACKEND_API_FORGET_PIN_SERVICE;
export const BACKEND_API_FGPIN: string = BACKEND_API_FORGET_PIN_SERVICE;
export const BACKEND_API_CHPIN: string = BACKEND_BASE_URL + '/api/services/support';
export const BACKEND_API_REPEAT_TRANS: string = BACKEND_BASE_URL + '/api/repeat';
export const BACKEND_API_REFRESH_TOKEN: string = BACKEND_BASE_URL + '/api/refresh';
/*export const BACKEND_API_SCRHLP: string = BACKEND_BASE_URL + '/api/services/support';*/
export const BACKEND_API_SCRHLP: string = BACKEND_API_SUPPORT_SERVICE;
export const BACKEND_API_CNTRS: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_VRVRD: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_FBPLAN: string = BACKEND_BASE_URL + '/api/open';
// export const BACKEND_API_ROOT_URL:string = 'http://localhost:7070'+BACKEND_API_PATH;
export const BACKEND_API_SOINFO: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_VOFFER: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_ZSTMT: string = BACKEND_API_TRANSACTION_SERVICE;
export const BACKEND_API_UFAQ: string = BACKEND_API_OPEN_SERVICE;
export const BACKEND_API_UFEED: string = BACKEND_API_SUPPORT_SERVICE;
export const BACKEND_API_IRVAL_RECHG: string = BACKEND_BASE_URL + '/api/irval';
export const BACKEND_API_FBPBIL: string = BACKEND_API_OPEN_SERVICE;
export const BACKEND_API_FBPFLD: string = BACKEND_API_OPEN_SERVICE;
export const BACKEND_API_IRVAL_BPAY: string = BACKEND_BASE_URL + '/api/irval';
export const BACKEND_API_FBPCAT: string = BACKEND_API_OPEN_SERVICE;
//export const BACKEND_API_RECHG: string = BACKEND_BASE_URL + '/api/services/user';
// Common http root api
export const URI_VCID = '/auth/validate';
export const URI_AUTH = '/auth/authenticate';
export const URI_ONBD = '/handler/openservice';
export const URI_FTORR = '/api/transactionservice';
export const URI_TRHIS = '/handler/trhis';
export const URI_MDSA = '/handler/mdsa';
export const URI_IRVAL = '/api/irval';

// statues
export const BE_STATUS_SUCCESS = 'Z200';
export const BE_STATUS_FAILURE = 'Z500';
export const BE_STATUS_NEW_USER = 'Z004';
export const BE_STATUS_OLD_USER = 'Z000';
export const BE_STATUS_BLOCKED_USER = 'Z001';

// Operation Codes
export const OPCODE_VCID = 'VCID';
export const OPCODE_AUTH = 'AUTH';
export const OPCODE_ONBD = 'ONBD';
export const OPCODE_SVDINS = 'SVDINS';
export const OPCODE_TRHIS = 'FORHIS';
export const OPCODE_MDSA = 'MDSA';
export const OPCODE_MDSB = 'MDSB';
export const OPCODE_RECHG = 'RECHG';
export const OPCODE_RCSTS = 'RCSTS';
export const OPCODE_REINS = 'REINS';
export const OPCODE_UUSPR = 'UUSPR';
export const OPCODE_UUSPR_EML = 'UUSPR';
export const OPCODE_STPIN = 'STPIN';
export const OPCODE_RKTN = 'RKTN';
export const OPCODE_PBPREF = 'PBPREF';
export const OPCODE_GEOTP = 'GEOTP';
export const OPCODE_AUOTP = 'AUOTP';
export const OPCODE_FGPIN = 'FGPIN';
export const OPCODE_CHPIN = 'CHPIN';
export const OPCODE_SOINFO = 'SOINFO';
export const OPCODE_SCRHLP = 'SCRHLP';
export const OPCODE_CNTRS = 'CNTRS';
export const OPCODE_VOFFER = 'VOFFER';
export const OPCODE_UFAQ = 'UFAQ';
export const OPCODE_UFEED = 'UFEED';
export const OPCODE_VRVRD = 'VRVRD';
export const OPCODE_FBPLAN = 'FBPLAN';
export const OPCODE_IRVAL_RECHG = 'RECHG';
export const OPCODE_FTORR = 'FTORR';
export const OPCODE_ADDM = 'ADDM';
export const OPCODE_ZSTMT = 'ZSTMT';
export const OPCODE_FBPBIL = 'FBPBIL';
export const OPCODE_FBPFLD = 'FBPFLD';
export const OPCODE_FBPCAT = 'FBPCAT';
export const OPCODE_IRVAL_BPAY = 'BPAY';
export const OPCODE_BPAY = 'BPAY';
// local Storage constants
export const LS_USER_STATUS = 'USER_STATUS';
export const LS_ACCESS_TOKEN = 'ACCESS_TOKEN';
export const LS_REFRESH_TOKEN = 'REFRESH_TOKEN';
export const LS_LOGIN_MSISDN = 'LOGIN_MSISDN';
export const LS_LOGGED_IN_USER = 'LOGGED_IN_USER';
export const LS_USER_MDSA_RESPONSE = 'USER_MDSA_RESPONSE';
export const LS_ERROR_RESPONSE = 'ERROR_RESPONSE';
export const LS_RECHARGE_RESPONSE = 'RECHARGE_RESPONSE';
export const LS_FGPIN_RESPONSE = 'FGPIN_RESPONSE';
export const LS_RCSTS_RESPONSE = 'RCSTS_RESPONSE';
export const LS_IS_SIGNED_UP = 'IS_SIGNED_UP';
export const LS_SVD_INST = 'SVD_INST';
export const LS_REPEAT_TRANS = 'REPEAT_TRANS';
export const LS_REFRESH_STATUS_PAGE = 'REFRESH_STATUS_PAGE';
export const LS_NEW_EMAIL = 'NEW_EMAIL';
export const LS_IS_SAVED_CARD = 'LS_IS_SAVED_CARD';
export const LS_VOFFER_RESPONSE = 'LS_VOFFER_RESPONSE';
export const LS_FTORR_RESPONSE = 'LS_FTORR_RESPONSE';
// Session Storage Constants
export const SS_USER_STATUS = 'LS_USER_STATUS';
export const SS_RECHARGE_INFO = 'SS_RECHARGE_INFO';
export const SS_LOGIN_MSISDN = 'LS_LOGIN_MSISDN';
export const SS_LOGGED_IN_USER = 'LS_LOGGED_IN_USER';
export const SS_IS_SIGNED_UP = 'LS_IS_SIGNED_UP';
export const SS_PREVIOUS_PAGE = 'SS_PREVIOUS_PAGE';
export const SS_FAQ_QUESTION = 'SS_FAQ_QUESTION';
export const SS_CURRENT_ORDER_NUMBER = 'CURRENT_ORDER_NUMBER';
export const SS_MIXPANEL_TEMP_IDENTITY = 'LS_MIXPANEL_TEMP_IDENTITY';
export const SS_MIXPANEL_IDENTITY = 'LS_MIXPANEL_IDENTITY';
export const SS_CARD_TYPE = 'SS_CARD_TYPE';
export const SS_SERVICE_CATEGORY = 'Recharge Mobile Number';
export const SS_SERVICE_TYPE = 'AIRTIME';
export const SS_BROWSER_PREVIOUS_PAGE = 'SS_BROWSER_PREVIOUS_PAGE';
export const SS_BROWSER_CURRENT_PAGE = 'SS_BROWSER_CURRENT_PAGE';
export const SS_BROWSER_LAST_PAGE = 'SS_BROWSER_LAST_PAGE';
export const SS_HELP_CATEGORY_ID = 'SS_HELP_CATEGORY_ID';
export const SS_BILLER = 'SS_BILLER';
export const SS_SERVICE = 'SS_SERVICE';
export const SS_IRVAL_RECHG_RESPONSE = 'SS_IRVAL_RECHG_RESPONSE';
export const SS_CATEGORY_ID = 'SS_CATEGORY_ID';
// export const SS_DIRECT_SIGN_IN = "SS_DIRECT_SIGN_IN";

// URL Routes Constants
export const URL_RECHARGE = '/user';
export const URL_RECHARGE_STATUS = '/user-status';
export const URL_REVIEW = '/review';
export const URL_ENTER_PIN = '/enter-pin';
export const URL_CREATE_PIN = '/create-pin';
export const URL_DEBIT_CREDIT = '/debit-credit';
export const URL_SAVED_INSTRUMENTS = '/saved-instruments';
export const URL_FORGET_PIN = '/fgpin-otp';
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

