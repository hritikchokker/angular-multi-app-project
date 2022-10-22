import { ApplicationRef, NgModule, NgZone, PlatformRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstAppComponent } from './first-app/first-app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FirstAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstAppComponent
      }
    ])
  ]
})
export class FirstAppWrapperModule {
  constructor(
    private _appRef: ApplicationRef,
    private _platRef: PlatformRef,
    private _ngZone: NgZone
  ) {
    this.bootstrapFirstApp();
  }

  async bootstrapFirstApp(): Promise<void> {
    const module = await import('projects/first-app/src/app/app.module').then(m => m.AppModule);
    this._ngZone.runOutsideAngular(() => {
      this._platRef.bootstrapModule(module);
      this._appRef.tick();
    });
  }
}
