import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRef]'
})
export class RefDirective {

  constructor(public conteinerRef:ViewContainerRef) { }

}
