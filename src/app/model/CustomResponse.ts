export class CustomResponse {

  constructor(public oAuth?: OAuth, public service?: Service, public user?: User, public payment?: Payment,
              public lineItems?: LineItems, public interfaceData?: InterfaceData, public  data?: Data,
              public operationCode?: string, public status?: string, public title?: string, public message?: string,
              public sysDate?: string, public showDataBalance?: boolean, public appPassword?: string,
              public userName?: string, public requestId?: string, public orderNumber?: number, public error?: Error,
              public orderHistory: OrderHistory[] = [], public transactions?: Transaction[], public plan?: string,
              public offer?: Offer, public offers?: Offers, public cashback?: Cashback, public campaign?: Campaign,
              public partner?: Partner, public paymentData?: PaymentData, public serviceData?: ServiceData,
              public peopleProfile?: PeopleProfile, public orderInfo?: OrderInfo, public faqs?: Faq,
              public warnInfo?: WarnInfo, public activityData?: ActivityData, public geoLocation?: GeoLocation,
              public billerPlans?: BillerPlans, public jwt?: string, public refreshToken?: string,
              public billers?: Biller[], public fields?: Field[], public biller?: Biller, public categories?: Category,
              public walletStatements: WalletStatements[] = []) {

  }
}
/*public peopleProfile?: any*/
export class OAuth {
  accessToken?: string;
  refreshToken?: string;
  interfaceId?: string;
}


export interface OrderHistory {
  billerName?: string;
  accountHolderName?: string;
  accountId?: string;
  transactionDate?: string;
  service?: string;
  orderNumber?: number;
  serviceName?: string;
  transactionAmount?: number;
  status?: string;
  allowedPayback?: string;
  serviceCode?: string;
  messages?: MessageTypes;
}

export interface WalletStatements {
  orderNumber?: number;
  transactionTime?: string;
  transactionStatus?: string;
  transactionAmount?: number;
  serviceType?: string;
  previousBalance?: number;
  postBalance?: number;
  entryType?: string;
}

export class MessageTypes {
  serviceComplete?: Message;
  serviceStatus?: Message;
  settlementStatus?: Message;
  settlement?: Message;
  walletSettlement?: Message;
  paymentFailed?: Message;
}
export class Message {
  displayOrder?: number;
  displayValue?: string;
  iconURL?: string;
  colour?: string;
  displayDate ?: string;
}

export class InterfaceData {
  data?: Data;
  version?: string;
  platform?: string;
  type?: string;
  identification?: string;
  osId?: string;
  psId?: string;
  installedApps?: string[];
  imei?: string;
}
export class ActivityData {
  geoLocation?: GeoLocation;
  phoneHeight?: string;
  phoneWidth?: string;
  userIPAddress?: string;
  wifiMacAddress?: string;
  buildVersion?: string;
  os?: string;
  browser?: string;
  osVersion?: string;
  browserVersion?: string;
  device?: string;
  countryCode?: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  city?: string;
  zipCode?: string;
  timeZone?: string;
  metroCode?: string;
}

export class GeoLocation {
  latitude?: string;
  longitude?: string;
}

export class Data {
  manufacture?: string;
  manufactureModel?: string;
  os?: string;
  buildVersion: string;
  osVersion?: string;
  area?: string;
  osId?: string;
  psId?: string;
}

export class Service {
  transactionAmount?: number;
  type?: string;
  accountId?: string;
  vendor?: string;
  accountName?: string;
  orderNumber?: number;
  limit?: number;
  offset?: number;
  billerId?: number;
  ron?: string;
  categoryId?: number;
}

export class Error {
  code?: string;
  title?: string;
  message?: string;
  bucketInfo?: BucketInfo;
  referenceLink?: string;
}

export class Offer {
  code?: string;
  type?: string;
  message?: string;
  offerCount?: number;
  title?: string;
  cashback?: Cashback[];
  autoApplied?: boolean;
  offers?: Offers[];
  offerValue?: string;
  offerAmount?: number;
  offerCategory?: string;
}

export class Offers {
  id?: string;
  cashback?: Cashback[];
}

export class Cashback {
  offerId?: string;
  code?: string;
  service?: string;
  offerCategory?: string;
  category?: string;
  description?: string;
  tnc?: string;
  title?: string;
  couponExpiry?: string;
  offerValidityDate?: string;
  isPercentage?: string;
  isVisible?: string;
  priority?: number;
  platform?: string;
  couponCampaign?: string;
  campaignPartner?: string;
  campaign?: Campaign;
}

export class Campaign {
  partner?: Partner;
}

export class Partner {
  campaign?: string;
  channel?: string;
  channelPartner?: string;
}


export class Instrument {
  instrumentId?: string;
  instrumentType?: string;
  bankName?: string;
  panView?: string;
  expiryYear?: string;
  expiryMonth?: string;
  createdOn?: string;
  updatedOn?: string;
  overallStatus?: string;
}

export class Payment {

  pin?: string;
  instruments?: Instrument[];
  autoApplied?: boolean;
  pan?: string;
  cv2?: string;
  instrumentId?: string;
  expiryYear?: string;
  expiryMonth?: string;
  isCardDetailsSaved?: boolean;
  bankPin?: string;
  tppType?: string;
  zotoPay?: boolean;
  paybackType?: string;
  zotoBalance?: number;
  // Frontend  vars
  msisdn?: string;
  amount?: number;
  operator?: string;
  billerId?: number;
  hasplan?: boolean;
  primaryBalance?: number;
  accountId?: string;
  commisionBalance?: number;
  serviceType?: string;
  bankName?: string;
  acsURL?: string;
  md?: string;
  termURLv2?: string;
  paReq?: string;
  paRes?: string;
  vendor?: string;
}
export class PeopleProfile {

}

export class LineItems {
  WALLET: any;
  TPP: any;
  HYBRID: any;

}
export class User {
  userId?: string;
  extInterfaceId?: string;
  msisdn?: string;
  type?: string;
  categoryCode?: string;
  otp?: string;
  password?: string;
  encryptedOTP?: string;
  otpExpiryDate?: string;
  firstName?: string;
  lastName?: string;
  emailId?: string;
  networkLocation?: string;
  pin?: string;
  oldPin?: string;
  isPinSet?: any;
  isExpired?: boolean;
  name?: string;
  sequenceId?: string;
}

export class Transaction {
  status?: string;
  orderNumber?: number;
  payerUserId?: string;
  transactionDate?: string;
  operationType?: string;
  amount?: number;
  allowedPayback?: string;
  paymentData?: PaymentData;
  serviceData?: ServiceData;
}

export class PaymentData {
  accountId?: string;
  transactionAmount?: number;
  discountAmount?: number;
  paymentType?: string;
}

export class ServiceData {
  serviceType?: string;
  billerId?: number;
  billerName?: string;
  title?: string;
  paymentId?: number;
  vendor?: string;
}

export class OrderInfo {
  serviceInfo?: OrderHistory;
  serviceDetails?: ServiceDetails[];
}

export class ServiceDetails {
  displaykey?: string;
  amount?: number;
  description?: string;
  iconUrl: string;
  displayOrder: number;
}

export class Faq {
  screenId?: string;
  title?: string;
  questionList?: Question[];
  Categories?: HelpItem[];
  Hot?: HelpItem[];
}
export class HelpItem {
  id?: number;
  title?: string;
  questionList?: Question[];
}
export class Question {
  title?: string;
  description?: string;
  priority?: number;
  feedback?: string;
  questionId?: number;
  like?: boolean;
  id?: any;
  metaData?: MetaData;
}
export class Category {
  categoryId?: number;
  name?: string;
  description?: string;
  imageUrl?: string;
  id?: number;
}
export class MetaData {
  noCount?: number;
  yesCount?: number;
}
export class WarnInfo {
  warning?: Warning[];
}

export class Warning {
  vendor?: string;
  message?: string;
}

export class OfferItem {
  offer?: Offer;
  error?: Error;
}

export class BucketInfo {
  code?: string;
  title?: string;
  message?: string;
}

export class BillerPlans {
  DataPlan?: Plan[];
}

export class Plan {
  name?: string;
  amount?: number;
  validity?: string;
  info?: Info;
}

export class Info {
  description?: string;
}

export class Biller {
  billerId?: number;
  name?: string;
  imageUrl?: string;
  hasPlans?: boolean;
  vendor?: string;
}

export class Field {
  fieldId?: number;
  name?: string;
  placeHolder?: string;
  type?: string;
  imageUrl?: string;
  validations?: Validation;
}

export class Validation {
  minValue?: number;
  maxValue?: number;
  minLength?: number;
  maxLength?: number;
}

