import {
  OAuth, Service, User, Payment, InterfaceData, Data, Offer, Faq, GeoLocation,
  ActivityData, Category, Question
} from './CustomResponse';
import { environment } from '../../environments/environment';

export class CustomRequest {
  constructor(public userName?: string, public password?: string, public oAuth?: OAuth, public service?: Service, public user?: User, public payment?: Payment, public offer?: Offer,
              public interfaceData?: InterfaceData, public  data?: Data, public operationCode?: string,
              public status?: string, public title?: string, public message?: string, public sysDate?: string,
              public showDataBalance?: boolean, public appPassword?: string,
              public requestId?: string, public orderNumber?: number, public faq?: Faq,
              public activityData?: ActivityData, public geoLocation?: GeoLocation, public category?: Category,
              public question?: Question, public jwt?: string, public refreshToken?: string) {
    this.interfaceData = new InterfaceData();
    this.interfaceData.version = '0.0.1';
    this.interfaceData.type = 'WEB';
    this.interfaceData.identification = '358967064814450';
    // this.interfaceData.osId='877b318406b4b7a8';
    this.interfaceData.data = new Data();
    this.interfaceData.data.os = 'web';
    this.interfaceData.data.osVersion = '6.0.0';
    this.oAuth = new OAuth();
    this.oAuth.interfaceId = 'ZotoUsers';
    this.user = new User();
    this.user.type = 'SMS';
    this.user.categoryCode = 'CUST';
    this.offer = new Offer();
    this.service = new Service();
  }
}
