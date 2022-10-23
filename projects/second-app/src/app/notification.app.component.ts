import { Component, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from 'projects/shared/directives/dynamic-component.directive';
import { CommonPlatformService } from 'projects/shared/services/common-platform.service';

@Component({
  selector: 'second-app-root',
  templateUrl: './notification.app.component.html',
  styleUrls: ['./notification.app.component.scss']
})
export class NotificationAppComponent {
  title = 'second-app';
  flag = false;
  @ViewChild(DynamicComponentDirective) componentLoader!: DynamicComponentDirective

  async showNotificationPopup(): Promise<void> {
    try {
      if (this.flag) {
        this.componentLoader.viewContainerRef.clear();
        this.flag = false;
        return;
      }
      await import('./notification-popup/notification-popup.component').then(c => {
        const componentRef = this.componentLoader.viewContainerRef.createComponent(c.NotificationPopupComponent);
        // this.popupStateListener$ = componentRef.instance.onQuerySubmit.asObservable();
        // this.listenForPopupState();
      });
      this.flag = true;
    } catch (error) {

    }
  }
}
