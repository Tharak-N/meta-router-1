import { Component, HostListener } from '@angular/core';
import { RoutedApp } from 'meta-spa-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  reqObjectModel: any;
  // Do make this work with DI, define a InjectionToken
  // and bind it to a factory that creates an instance
  // of this.
  private routedApp: RoutedApp = new RoutedApp();

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
      console.log("the authToken in app-b in local storage is", localStorage.getItem('authToken'))
      console.log("the SSO in app-b in local storage is", localStorage.getItem('SSO'))
    }
  }



  constructor() {
    this.initRoutedApp();
  }


  initRoutedApp() {
    this.routedApp.config({ appId: 'b' });
    this.routedApp.init();
  }
}
