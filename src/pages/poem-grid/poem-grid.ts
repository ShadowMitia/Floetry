import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PoemOverlayPage } from '../poem-overlay/poem-overlay';
import { PoemApiProvider } from '../../providers/poem-api/poem-api';
import { AngularFireDatabase } from '@angular/fire/database';

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

  poems: any = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private poemApi: PoemApiProvider, private db : AngularFireDatabase) {
    this.feels = this.navParams.get("feel");
    this.emotion = this.navParams.get("emotion");


    this.poemApi.getPoemsByFeelings(this.emotion, this.feels)
      .then((res) => {console.log(res); this.poems = res})
      .catch(err => console.error(err));

    }

  openOverlay(poem: any) {
    let profileModal = this.modalCtrl.create(PoemOverlayPage, { poem: poem });
        profileModal.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemGridPage');
  }

}
