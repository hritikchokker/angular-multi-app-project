import { Component, inject, NgZone, OnInit, PlatformRef, ChangeDetectorRef } from '@angular/core';
import { ChatQuery, CommonPlatformService } from './common-platform.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  chatQueryList: Array<ChatQuery> = [];
  ngZone = inject(NgZone);
  platformService = inject(CommonPlatformService);
  platformRef = inject(PlatformRef);
  changeDetactorRef = inject(ChangeDetectorRef);
  ngOnInit(): void {
    this.bootstrapChatBot();
    this.platformService.chatBotQueryListener$.subscribe((d: ChatQuery) => {
      if (Object.keys(d).length) {
        this.chatQueryList.push(d);
        this.changeDetactorRef.detectChanges();
      }
    })
    // this.bootstrapNotificationProject();
  }

  async bootstrapChatBot(): Promise<void> {
    const module = await import('projects/first-app/src/app/app.module').then(m => m.AppModule);
    this.ngZone.runOutsideAngular(async () => {
      const moduleRef = await this.platformRef.bootstrapModule(module)
    })
    // await this.platformService.loadProjectOnDemand('', 'AppModule', this.ngZone);
  }

  async bootstrapNotificationProject(): Promise<void> {
    const module = await import('projects/second-app/src/app/app.module').then(m => m.AppModule);
    this.ngZone.runOutsideAngular(async () => {
      const moduleRef = await this.platformRef.bootstrapModule(module)
    })
    // await this.platformService.loadProjectOnDemand('', 'AppModule', this.ngZone);
  }
}
