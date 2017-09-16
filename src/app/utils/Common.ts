import {CustomRequest} from '../model/CustomRequest';
import {RequestOptions, Headers} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {CustomResponse} from '../model/CustomResponse';
import {Session} from 'selenium-webdriver';
import {AppLogger} from './AppLogger';

/**
 * Created by deepak.kumar2 on 4/21/2017.
 */
export class Common {

  static convert<T>(value: string, arg: T): T {
    return arg;
  }

  static create(): CustomRequest {
    const customRequest = new CustomRequest();
    return customRequest;
  }

  static createEditRequest(operationCode: string): CustomRequest {
    const customRequest = new CustomRequest();
    return customRequest;
  }

  static createHeader(): RequestOptions {
    const headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    const options = new RequestOptions({headers: headers});
    return options;
  }

  static isPresent(key: string): boolean {
    let isValid = false;
    if (localStorage.getItem(key) === null || localStorage.getItem(key) === undefined) {
      isValid = false;
    }
    return isValid;
  }
  public static setStorage(key: string, value: any) {
    if (typeof localStorage === 'object') {
      try {
        if (key.startsWith('SS')) {
          // AppLogger.log('In')
          sessionStorage.setItem(key, JSON.stringify(value));
        } else {
          localStorage.setItem(key, JSON.stringify(value));
        }
      }catch (e) {
        alert('Your web browser does not support storing settings in private browsing mode. Please use normal mode.');
      }
    }
  }
  public static getStorage(item: any) {
   // AppLogger.log('inside get storage' + item) ;
    if (item.startsWith('SS')) {
      return this.parse(sessionStorage.getItem(item));
    } else  {
      return this.parse(localStorage.getItem(item));
    }
  }

  public static parse (input: any)  {
    if (this.isJson(input)) {
      return JSON.parse(input);
    }else {
      return input;
    }
  }

  public static isJson(str: any) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

  public static  getStatus(customRes: CustomResponse): boolean {
    if (customRes.status === 'Z200') {
      return true;
    }
    return false;
  }

  public static  removeItem(item: any) {
    if (localStorage.getItem(item)) {
       localStorage.removeItem(item);
     }else if (sessionStorage.getItem(item)) {
       sessionStorage.removeItem(item);
     }

  }
  public static isStringEmpty(str: string): boolean {
    if (str === undefined || str === '' || str === null) {
      return true;
    }
    return false;
  }

}
