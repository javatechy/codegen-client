import {
  OAuth, Service, User, Payment, InterfaceData, Data, Offer, Faq, GeoLocation,
  ActivityData, Category, Question
} from './CustomResponse';
import { environment } from '../../environments/environment';

export class CustomRequest {
  constructor(public userName?: string, public password?: string) {
  }
}
