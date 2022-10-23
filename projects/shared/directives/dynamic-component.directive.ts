import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]',
  standalone: true
})
export class DynamicComponentDirective {

  viewContainerRef = inject(ViewContainerRef);

}
