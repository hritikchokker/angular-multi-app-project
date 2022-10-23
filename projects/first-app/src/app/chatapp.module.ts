import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicComponentDirective } from 'projects/shared/directives/dynamic-component.directive';

import { ChatAppComponent } from './chatapp.component';

@NgModule({
  declarations: [
    ChatAppComponent,
  ],
  imports: [
    BrowserModule,
    DynamicComponentDirective,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [ChatAppComponent]
})
export class ChatAppModule { }
