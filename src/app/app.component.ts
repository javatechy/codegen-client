import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router, RoutesRecognized} from '@angular/router';
import {LoginService} from './services/login.service';
import {HelperService} from './services/helper.service';


@Component({
  selector: 'app-root',
  template: `
    <nav>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ticks = 0;
  title = 'Zoto';
  loginService: LoginService;
  mdsaResponse: any;
  router: Router;
  previousUrl: string;

  constructor(router: Router, loginService: LoginService, helperService: HelperService) {

    console.log('app comp constr');
    this.loginService = loginService;
    this.router = router;
    helperService.goLogin();
  }

  ngOnInit() {
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
