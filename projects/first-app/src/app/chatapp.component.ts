import { Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { DynamicComponentDirective } from 'projects/shared/directives/dynamic-component.directive';
import { CommonPlatformService, ChatQuery } from 'projects/shared/services/common-platform.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-firstapp-root',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.scss'],
})
export class ChatAppComponent implements OnDestroy {
  commonPlatService = inject(CommonPlatformService);
  title = 'wrapper-app';
  flag = false;
  popupStateListener$!: Observable<ChatQuery>;
  @ViewChild(DynamicComponentDirective) componentLoader!: DynamicComponentDirective;
  subscription: Array<Subscription> = [];

  async loadChatPopup(): Promise<void> {
    // throw new Error('app crashed');
    try {
      if (this.flag) {
        this.componentLoader.viewContainerRef.clear();
        this.flag = false;
        return;
      }
      await import('./chat-popup/chat-popup.component').then(c => {
        const componentRef = this.componentLoader.viewContainerRef.createComponent(c.ChatPopupComponent);
        this.popupStateListener$ = componentRef.instance.onQuerySubmit.asObservable();
        this.listenForPopupState();
      });
      this.flag = true;
    } catch (error) {

    }
  }

  listenForPopupState(): void {
    this.subscription.push(
      this.popupStateListener$.subscribe(d => {
        if (d.message && d.type) {
          this.flag = false;
          this.commonPlatService.updateQuery(d);
          this.componentLoader.viewContainerRef.clear();
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach((subs: Subscription) => {
      subs.unsubscribe();
    })
  }
}