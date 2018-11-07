import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  info = {
    email: "",
    password: "",
    password2: "",
    username: "",
    firstname: "",
    lastname: ""

  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationProvider, private toast : ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
    if (this.info.password === this.info.password2) {
      this.auth.createAccount(this.info);
      this.navCtrl.popToRoot();
    } else {
      this.toast.create({message: "Invalid form"}).present();
    }

  }

}
