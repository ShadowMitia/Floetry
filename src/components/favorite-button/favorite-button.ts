import { Component, Input } from '@angular/core';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireDatabase } from '@angular/fire/database';

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

  isFavorited: boolean = false;
  @Input() poemId: string;

  constructor(private auth: AuthenticationProvider) {
    console.log('Hello FavoriteButtonComponent Component');
  }

  ngOnInit(){
    let favs = this.auth.getUserFavorites();
    console.log("toto", favs, this.poemId);
    if (favs.find((val) => val == this.poemId) != undefined) this.isFavorited = true;
  }

	toggle()
	{
    this.isFavorited = !this.isFavorited;
    if (this.isFavorited) {
      this.auth.addPoemToFavorites(this.poemId);
    } else {
      this.auth.removePoemFromFavorites(this.poemId);
    }
	}

}
