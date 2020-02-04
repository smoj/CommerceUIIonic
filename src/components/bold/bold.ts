import { Directive, ElementRef } from '@angular/core';

/*
  Generated class for the Doublepadding directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[bold]' // Attribute selector
})
export class Bold {

  constructor(el : ElementRef) {
    // console.log('Hello Doublepadding Directive');
    el.nativeElement.style.fontWeight = 'bold';
  }

}
