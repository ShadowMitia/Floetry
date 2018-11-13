import { Component, Input } from '@angular/core';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * FavoriteButtoncomponent.
 *
 * A star shaped button used to select a poem as a favorite.
 * @constructor
 * @param {AuthenticationProvider} auth - User's account authentication.
 */
@Component({
  selector: 'favorite-button',
  templateUrl: 'favorite-button.html'
})

export class FavoriteButtonComponent {

  isFavorited: boolean = false; /** False = non favorited, True = favorited. Base state is false. */
  @Input() poemId: string; /** Id of the poem in the database. */

  constructor(private auth: AuthenticationProvider) {
    console.log('Hello FavoriteButtonComponent Component');

  }

  /**
  * Checks if a poem has already been favorited. Used when the poem page is generated
  * to retrieve the status of the poem. A poem that has been favorited by the user
  * must indeed show up as being favorited when the page is up.
  */
  ngOnInit(){
    let favs = this.auth.getUserFavorites();
    console.log("toto", favs, this.poemId);
    if (favs.find((val) => val == this.poemId)) this.isFavorited = true;
  }

  /**
  * Toggles the favorited status. Add or remove the poem from the user's favorites.
  */
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
