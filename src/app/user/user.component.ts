import {Component, Input, ChangeDetectorRef, OnInit, AfterViewInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {HelperService} from '../services/helper.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [ HelperService],
})
export class UserComponent {

}
