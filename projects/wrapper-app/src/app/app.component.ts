import { DOCUMENT } from '@angular/common';
import { Component, inject, NgZone, OnInit, PlatformRef, ChangeDetectorRef, NgModuleRef, ApplicationRef } from '@angular/core';
import { CommonPlatformService, ChatQuery } from 'projects/shared/services/common-platform.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  chatQueryList: Array<ChatQuery> = [];
  userNotificationActionList: Array<string> = [];
  ngZone = inject(NgZone);
  platformService = inject(CommonPlatformService);
  platformRef = inject(PlatformRef);
  changeDetactorRef = inject(ChangeDetectorRef);
  chatAppLoaded = false;
  notificationAppLoaded = false;
  appRefs: Map<string, NgModuleRef<unknown>> = new Map();
  _document: Document = inject(DOCUMENT);
  applicationRef = inject(ApplicationRef);
  notificationLoaded = false;
  ngOnInit(): void {
    // this.bootstrapChatBot();
    this.platformService.chatBotQueryListener$.subscribe((d: ChatQuery) => {
      if (Object.keys(d).length) {
        this.chatQueryList.push(d);
        this.changeDetactorRef.detectChanges();
      }
    })
    this.bootstrapNotificationProject();
    this.listenForUserNotificationAction();
  }

  async bootstrapChatBot(): Promise<void> {
    if (this.chatAppLoaded) {
      return;
    }
    const module = await import('projects/first-app/src/app/chatapp.module').then(m => m.ChatAppModule);
    this.ngZone.runOutsideAngular(async () => {
      const moduleRef = await this.platformRef.bootstrapModule(module)
      this.appRefs.set('chatapp', moduleRef);
      this.changeDetactorRef.detectChanges();
      moduleRef.onDestroy = () => {
        this.chatAppLoaded = false;
      };
      this.chatAppLoaded = true;
    })
    // await this.platformService.loadProjectOnDemand('', 'AppModule', this.ngZone);
  }


  async bootstrapNotificationProject(): Promise<void> {
    if (this.notificationAppLoaded) {
      return;
    }
    const module = await import('projects/second-app/src/app/notification.app.module').then(m => m.NotificationAppModule);
    this.ngZone.runOutsideAngular(async () => {
      const moduleRef = await this.platformRef.bootstrapModule(module)
      this.appRefs.set('notificationapp', moduleRef);
      this.changeDetactorRef.detectChanges();
      moduleRef.onDestroy = () => {
        this.notificationAppLoaded = false;
      };
      this.notificationAppLoaded = true;
    })
    // await this.platformService.loadProjectOnDemand('', 'AppModule', this.ngZone);
  }

  onAppDestroy(name: string): void {
    this.ngZone.runOutsideAngular(() => {
      this.appRefs.get(name)?.destroy();
      this.changeDetactorRef.detectChanges();
      this.applicationRef.tick();
    });
    if (name === 'chatapp') {
      this._document.body.appendChild(this._document.createElement('app-firstapp-root'));
      this.chatAppLoaded = false;
    } else {
      this._document.body.appendChild(this._document.createElement('second-app-root'));
      this.notificationAppLoaded = false;
    }
  }

  loadNotifications(flag = true): void {
    if (!flag) {
      this.notificationLoaded = false;
      this.platformService.clearNotificationList();
    } else {
      this.notificationLoaded = true;
      this.platformService.loadNotificationData(20);
    }
  }

  listenForUserNotificationAction(): void {
    this.platformService.userNotificationActionListener$.subscribe((data) => {
      this.userNotificationActionList.push(data);
      this.changeDetactorRef.detectChanges();
    })
  }
}
