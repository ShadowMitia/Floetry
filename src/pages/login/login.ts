import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ProfilePage } from '../../pages/profile/profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    info = {
        email: "",
        pass: ""
    };

    loginError: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private events: Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    tryLogin() {

        if (this.info.email == "toto" && this.info.pass == "toto") {
            this.loginError = false;
            this.storage.set('username', this.info.email);
            this.storage.set('password', "toto");
            setTimeout(() => {
                this.events.publish('user:login');
              this.navCtrl.popToRoot();
              this.navCtrl.push(ProfilePage);
            }, 300);

        } else {
            this.loginError = true;
        }
    }
}
