import {NgModule} from '@angular/core';
//import {IsAuthorized} from './is-authorized.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  bootstrap: [],
  declarations: [ LoaderComponent],
  exports: [ LoaderComponent]
})
export class UtilsModule {
}
