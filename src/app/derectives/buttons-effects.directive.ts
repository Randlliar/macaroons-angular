import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appButtonsEffects]'
})
export class ButtonsEffectsDirective implements OnInit{

  @Input() buttonDefaultBgColor:string = 'rgb(130, 19, 40)';
  @Input() buttonFocusBgColor:string = 'rgb(255,19,60)';
  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeElementBgColor(this.buttonFocusBgColor);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeElementBgColor(this.buttonDefaultBgColor);
  }

  ngOnInit() {
    this.changeElementBgColor(this.buttonDefaultBgColor);
  }

  changeElementBgColor(color: string) {
    this.el.nativeElement.setAttribute('style',{'background-image': color})
    this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
