import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';

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
        username: "",
        pass: ""
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private events: Events, private toastCtrl : ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    tryLogin() {
      console.log(this.info);
        if (this.info.username == "toto" && this.info.pass == "toto") {
            this.storage.set('username', this.info.username);
            setTimeout(() => {
                this.events.publish('user:login');
              this.navCtrl.popToRoot();
              this.navCtrl.push(ProfilePage);
              this.toastCtrl.create({
                message: "Login successfull!",
                duration: 2000
              }).present();
            }, 300);
        } else {
          this.toastCtrl.create({
            message: "Unknown username or password",
            duration: 2000,
            position: "bottom"
          }).present();
        }
    }
}
