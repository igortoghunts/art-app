import {Directive, DoCheck, ElementRef} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements DoCheck {
  hostElement: HTMLOptionElement;

  constructor(private readonly element: ElementRef) {
    this.hostElement = element.nativeElement;
  }

  ngDoCheck() {
    this.highlight();
  }

  private highlight(){
    this.hostElement.style.backgroundColor = this.hostElement.selected? 'red': 'white';
  }

}
