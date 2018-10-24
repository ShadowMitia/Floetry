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
    @Input() color: string;
    static id: number = 1;

  constructor() {
      console.log('Hello ColorButtonComponent Component');
      ColorButtonComponent.id++;
  }

}
