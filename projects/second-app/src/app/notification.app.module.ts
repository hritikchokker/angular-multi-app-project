import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponentDirective } from 'projects/shared/directives/dynamic-component.directive';
import { NotificationAppComponent } from './notification.app.component';
// import { NotificationPopupComponent } from './notification-popup/notification-popup.component';


@NgModule({
  declarations: [
    NotificationAppComponent,
    // NotificationPopupComponent
  ],
  imports: [
    BrowserModule,
    DynamicComponentDirective
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [NotificationAppComponent]
})
export class NotificationAppModule { }
