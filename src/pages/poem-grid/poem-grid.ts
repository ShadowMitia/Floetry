import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PoemOverlayPage } from '../poem-overlay/poem-overlay';

/**
 * Generated class for the PoemGridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poem-grid',
  templateUrl: 'poem-grid.html',
})
export class PoemGridPage {
	
	/*const fs = require('fs');*/

    feels: string;
    emotion: string;

    testTitle: string;
    testText: string;
	

    constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
        this.feels = this.navParams.get("feel");
        this.emotion = this.navParams.get("emotion");
		
		


        this.testTitle = "Poem title";
        this.testText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan Sulla.  Nullam rutrum.  Nam vestibulum accumsan nisl."

    }


    openOverlay(title: string, text: string) {
        let profileModal = this.modalCtrl.create(PoemOverlayPage, { title: title, text: text });
        profileModal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemGridPage');
  }

}
