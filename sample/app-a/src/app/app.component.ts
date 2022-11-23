import { Router, NavigationEnd } from '@angular/router';
import { Component, HostListener, Inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { RoutedApp } from 'meta-spa-router';
import { ROUTED_APP } from './app.tokens';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  reqObjectModel: any;

  @HostListener('click', ['$event'])
  onMessage($event: any){
    this.handleMessageEvent($event)
  }

  handleMessageEvent(event: any){
    // console.log("the event in handle message is", event)
    this.reqObjectModel = event.type
    // console.log("the req object model is", this.reqObjectModel)
    if(this.reqObjectModel=='click'){
      localStorage.removeItem('authToken')
      localStorage.setItem('authToken', this.reqObjectModel)
      localStorage.setItem('SSO', "true")
      console.log("the authToken in app-a in local storage is", localStorage.getItem('authToken'))
      console.log("the SSO in app-a in local storage is", localStorage.getItem('SSO'))
    }
  }


  constructor(
    // @Inject(ROUTED_APP) private routedApp: RoutedApp,
    // private router: Router
    ) {
    // this.initRoutedApp();
  }

  // initRoutedApp() {

  //   this.routedApp.config({
  //     appId: 'a',
  //     handleNotification: (tag, data) => console.debug('received broadcast', {tag, data}),
  //     allowedOrigins: 'same-origin'
  //   });

  //   this.routedApp.init();

  //   this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
  //     this.routedApp.sendRoute(e.url);
  //   });

  //   this.routedApp.registerForRouteChange(url => this.router.navigateByUrl(url));
  // }

}
