import { Component } from '@angular/core';

import { ProfilePage } from '../../pages/profile/profile';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the MenuBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent {

  text: string;

  constructor(private navCtrl: NavController, private toastCtrl : ToastController, private storage : Storage) {
    console.log('Hello MenuBarComponent Component');
    this.text = 'Hello World';
  }

  goToHome() {
    this.navCtrl.popToRoot();
  }

  goToProfile()
	{
    this.storage.get('username').then((val) => {
      if (val) {
        this.navCtrl.push(ProfilePage);
      } else {
        this.navCtrl.push(LoginPage);
      }
    });
	}

  goToDiscover() {
    let toast = this.toastCtrl.create({
      message: "Discover is coming soon", duration: 2000, position: 'top'
    });

    toast.present();
  }


}
