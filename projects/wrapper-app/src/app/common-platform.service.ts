import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface ChatQuery {
  type?: string,
  message?: string
}
@Injectable({
  providedIn: 'platform'
})
export class CommonPlatformService {

  private chatBotQuery$: BehaviorSubject<ChatQuery> = new BehaviorSubject({});
  chatBotQueryListener$: Observable<ChatQuery> = this.chatBotQuery$.asObservable();

  updateQuery(data: ChatQuery): void {
    this.chatBotQuery$.next(data);
  }
}
