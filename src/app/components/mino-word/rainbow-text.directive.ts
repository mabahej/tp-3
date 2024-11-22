import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowText]',
  standalone: true
})
export class RainbowTextDirective {

  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.borderColor') borderColor: string = 'black';

  private colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.changeColor();
  }

  private changeColor() {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.color = randomColor;
    this.borderColor = randomColor;
  }
}
