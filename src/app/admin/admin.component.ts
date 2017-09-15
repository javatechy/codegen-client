import {Component, Input, ChangeDetectorRef, OnInit, AfterViewInit, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {HelperService} from '../services/helper.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [ HelperService],
})
export class AdminComponent {
}
