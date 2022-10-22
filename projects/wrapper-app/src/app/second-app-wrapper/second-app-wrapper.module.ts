import { ApplicationRef, NgModule, NgZone, PlatformRef } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SecondAppWrapperModule {
  constructor(
    private _appRef: ApplicationRef,
    private _platRef: PlatformRef,
    private _ngZone: NgZone
  ) {
    this.bootstrapFirstApp();
  }

  async bootstrapFirstApp(): Promise<void> {
    const module = await import('projects/second-app/src/app/app.module').then(m => m.AppModule);
    this._ngZone.runOutsideAngular(() => {
      this._platRef.bootstrapModule(module);
    });
  }
}
