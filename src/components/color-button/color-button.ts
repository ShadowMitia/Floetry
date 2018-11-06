import { Component, Input} from '@angular/core';

/**
 * Generated class for the ColorButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'color-button',
  templateUrl: 'color-button.html'
})
export class ColorButtonComponent {

  @Input() text: string;
  @Input() insideText: string;
  @Input() fillColor: string = "red";
  @Input() size: number = 50;

  constructor() {
    console.log('Hello ColorButtonComponent Component');
  }

}
