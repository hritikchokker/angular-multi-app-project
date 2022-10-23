import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface ChatQuery {
  type?: string,
  message?: string
}

export interface NotificationList {
  message: string,
  id: number
}
@Injectable({
  providedIn: 'platform'
})
export class CommonPlatformService {

  private chatBotQuery$: BehaviorSubject<ChatQuery> = new BehaviorSubject({});
  chatBotQueryListener$: Observable<ChatQuery> = this.chatBotQuery$.asObservable();

  private notificationListSubject$: BehaviorSubject<Array<NotificationList>> = new BehaviorSubject([{ message: '', id: 0 }]);
  notificationList$: Observable<Array<NotificationList> | []> = this.notificationListSubject$.asObservable();
  private notificationList: Array<NotificationList> = [];

  private userNotificationActions$: Subject<string> = new Subject();
  userNotificationActionListener$: Observable<string> = this.userNotificationActions$.asObservable();
  updateQuery(data: ChatQuery): void {
    this.chatBotQuery$.next(data);
  }

  markUserAction(message: string, id: number): void {
    this.userNotificationActions$.next(message);
    const list = this.notificationListSubject$.value.filter(el => el.id !== id);
    this.notificationListSubject$.next(list);
  }

  loadNotificationData(num = 20): void {
    this.notificationList = [];
    for (let i = 0; i < num; i++) {
      this.notificationList.push({
        id: i + 1,
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Tempore corrupti et'
      });
    }
    this.notificationListSubject$.next(this.notificationList);
  }

  clearNotificationList(): void {
    this.notificationListSubject$.next([]);
  }


}
