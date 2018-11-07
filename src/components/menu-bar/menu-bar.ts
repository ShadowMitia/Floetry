import { Component } from '@angular/core';

import { ProfilePage } from '../../pages/profile/profile';
import { NavController } from 'ionic-angular';

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

  constructor(private navCtrl: NavController) {
    console.log('Hello MenuBarComponent Component');
    this.text = 'Hello World';
  }

  goToHome() {
    this.navCtrl.popToRoot();
  }

  goToProfile()
	{
		this.navCtrl.push(ProfilePage);
	}


}
