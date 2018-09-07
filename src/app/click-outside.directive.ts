import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

// https://www.bizstream.com/blog/november-2017/angular-click-elsewhere-directive

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    if (targetElement &&
        !this.elementRef.nativeElement.contains(targetElement)) {
      this.appClickOutside.emit(event);
    }
  }
}
