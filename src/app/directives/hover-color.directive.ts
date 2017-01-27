import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverColor]'
})
export class HoverColorDirective {

  private originalColor: string;
  @Input() hoverColor: string; 

  constructor(private element: ElementRef) { 
    this.originalColor = this.element.nativeElement.style.backgroundColor;
  }

  // subscribe to host element's mouseenter event
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.originalColor);
  }

  private setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
