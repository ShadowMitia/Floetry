import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoemApiProvider } from '../../providers/poem-api/poem-api';

import { Storage } from '@ionic/storage';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { AngularFireDatabase } from '@angular/fire/database';

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

	show: boolean = true;

  userInfo: {
    email: string,
    displayName: string,
    photoURL: string,
    favorites: Array<number>,
    firstname: string,
    lastname: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private poemApi : PoemApiProvider, private storage : Storage, private auth: AuthenticationProvider, private db : AngularFireDatabase)
  {

    let node = this.db.database.ref("users/"+auth.getUserID());
    this.userInfo = {
      displayName: auth.getUserDisplayName(),
      photoURL: auth.getUserPhotoURL(),
      email: auth.getUserEmail(),
      favorites: [],
      firstname: "",
      lastname: ""
    };

    node.once("value", (val) => {
      console.log("val", val);
      console.log("val()", val.val());
      console.log("key", val.key);
      let data = val.val()[Object.keys(val.val())[0]];

      this.userInfo.firstname = data.firstname;
      this.userInfo.lastname = data.lastname;
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

	toggle(arg)
	{
    this.show = !this.show;
	}

  logout() {
    this.auth.logout();
    this.navCtrl.popToRoot()
  }

}
