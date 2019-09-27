import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDrobdown]'
})
export class DrobdownDirective {
  @HostBinding('class.open') isOpen=false;

  @HostListener('click') 
  toggleOpen()
  {
  this.isOpen=!this.isOpen;
  }
  constructor() { }

}
