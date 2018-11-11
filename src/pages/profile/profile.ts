import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PoemApiProvider } from '../../providers/poem-api/poem-api';

import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireDatabase } from '@angular/fire/database';

import { PoemOverlayPage } from '../poem-overlay/poem-overlay';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	show: boolean = false;

  userInfo: {
    email: string,
    displayName: string,
    photoURL: string,
    favorites: string[],
    firstname: string,
    lastname: string
  };

  favoritePoems: any = [];
  state: string;

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
      for (let poemKey of this.userInfo.favorites) {
        let poem = value.val()[poemKey];
        poem.poemId = poemKey;
        this.favoritePoems = [...this.favoritePoems, poem];
      }
    });

  }

  openOverlay(poem: any) {
    let profileModal = this.modalCtrl.create(PoemOverlayPage, { poem: poem });
    profileModal.present();
  }

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
