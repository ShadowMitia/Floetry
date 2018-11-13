import { Component, Input} from '@angular/core';

/**
 * ColorButton Component
 *
 * Creates a colored, circular button.
 */
 
@Component({
  selector: 'color-button',
  templateUrl: 'color-button.html'
})
export class ColorButtonComponent {

  @Input() text: string;  /** Text contained below the button. */
  @Input() insideText: string; /** Text contained inside the color circle. */
  @Input() fillColor: string = "red"; /** Color of the button. */
  @Input() size: number = 50; /** Size of the button. */

  constructor() {
    console.log('Hello ColorButtonComponent Component');
  }

}
