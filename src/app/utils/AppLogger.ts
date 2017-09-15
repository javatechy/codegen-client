import {isUndefined} from 'util';
import {Common} from './Common';
import {environment} from '../../environments/environment';
/**
 * Created by deepak.kumar2 on 4/21/2017.
 */
export class AppLogger {

  static log(str: any, value?: any) {
    if (environment.production !== true) {
      if (value === undefined) {
        if (Common.isJson(str)) {
          console.log(JSON.stringify(str));
        } else {
          console.log(str);
        }
      } else {
        if (Common.isJson(value)) {
          console.log(str + JSON.stringify(value));
        } else {
          console.log(str + value);
        }
      }
    }

  }
}
