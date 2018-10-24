import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CapitalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  /**
   * Takes a value and makes it uppercase, first word in string by default.
   */
    transform(value:string, allWords:boolean = false) {
        if (value) {
            if (allWords) {
                const words = value.split(' ');
                value = words.map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');
            } else {
                value = value.substring(0, 1).toUpperCase() + value.substring(1);
            }
        }
        return value;
  }
}
