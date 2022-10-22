import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]'
})
export class DynamicComponentDirective {

  viewContainerRef = inject(ViewContainerRef);

}
