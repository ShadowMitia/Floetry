import { Component } from '@angular/core';

/**
 * Generated class for the FavoriteButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'favorite-button',
  templateUrl: 'favorite-button.html'
})
export class FavoriteButtonComponent {

  faved: boolean = false;
  @Input() fillColor: string = "black";

  constructor() {
    console.log('Hello FavoriteButtonComponent Component');
  }
  
	toggle()
	{
		if (this.faved == false)
		{
			this.faved = true;
		}
		else if(this.faved == true)
		{
			this.faved = false;
		}
	}

}
