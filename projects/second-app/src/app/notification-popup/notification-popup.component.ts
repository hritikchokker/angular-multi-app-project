import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone, OnInit } from '@angular/core';
import { CommonPlatformService, NotificationList } from 'projects/shared/services/common-platform.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationPopupComponent implements OnInit {

  commonPlatformService = inject(CommonPlatformService);
  ngZone = inject(NgZone);
  cdk = inject(ChangeDetectorRef);
  notificationList: Array<NotificationList> = [];
  ngOnInit(): void {
    this.commonPlatformService.notificationList$.subscribe((data: Array<NotificationList>) => {
      this.notificationList = data;
      this.cdk.detectChanges();
    })
  }

  notificationAction(action: number, item: NotificationList) {
    let message = 'user has {} this message';
    if (action === 1) {
      message = message.replace('{}', 'marked as cross');
    } else {
      message = message.replace('{}', 'marked as tick');
    }
    this.commonPlatformService.markUserAction(message, item.id);
  }

}
