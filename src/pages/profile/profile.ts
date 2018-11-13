import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PoemApiProvider } from '../../providers/poem-api/poem-api';

import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireDatabase } from '@angular/fire/database';

import { PoemOverlayPage } from '../poem-overlay/poem-overlay';


/**
 * Profile page.
 *
 * Shows the user profile. Profile contains two views : the user info and their favorite list.
 *
 * @constructor
 * @param {NavController} navCtrl - Required for navigation on the website.
 * @param {NavParams} navParams - Parameters retrieved from last page.
 * @param {PoemApiProvider} poemApi - Provider to manage the poem API.
 * @param {AuthenticationProvider} auth - User's account authentication.
 * @param {AngularFireDatabase} db - Website's database.
 * @param {ModalController} modalCtrl - In charge of showing the modal screen.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	show: boolean = false; /** Used to determine the content of the profile page. False is info, true is favorites */

  userInfo: { /** Explicit... */
    email: string, /** Email adress of the user */
    displayName: string, /** Pseudonym of the user */
    photoURL: string, /** Image profile of the user */
    favorites: string[], /** List of favorite poem's names */
    firstname: string, /** The user's first name */
    lastname: string /** The user's last name */
  };

  favoritePoems: any = []; /** List of favorite poems */
  state: string; /** What the page is currently showing */

  constructor(public navCtrl: NavController, public navParams: NavParams, private poemApi : PoemApiProvider, private auth: AuthenticationProvider, private db : AngularFireDatabase, private modalCtrl: ModalController)
  {

    this.state = "info";

    this.userInfo = {
      displayName: this.auth.getUserDisplayName(),
      photoURL: this.auth.getUserPhotoURL(),
      email: this.auth.getUserEmail(),
      favorites: this.auth.getUserFavorites(),
      firstname: this.auth.getUserFirstname(),
      lastname: this.auth.getUserLastname()
    };

    let node = this.db.database.ref("poems/");
    node.once("value", (value) => {
      for (let poemKey of this.userInfo.favorites) { /** Gathers all the favorited poems */
        let poem = value.val()[poemKey];
        poem.poemId = poemKey;
        this.favoritePoems = [...this.favoritePoems, poem];
      }
    });

  }

  /** Opens a poem overlay */
  openOverlay(poem: any) {
    let profileModal = this.modalCtrl.create(PoemOverlayPage, { poem: poem });
    profileModal.present();
  }

  /**
  * (unused) Shows a message on the console. Used for debugging purposes.
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');

  }

	toggle(arg)
	{
    this.show = this.state == "fav";
	}

  logout() {
    this.auth.logout();
    this.navCtrl.popToRoot()
  }

}
