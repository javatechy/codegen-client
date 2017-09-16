import { User} from './CustomResponse';
import { environment } from '../../environments/environment';

export class CustomRequest {
  constructor(public userName?: string, public password?: string) {
  }
}
