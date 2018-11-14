import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PoemOverlayPage } from '../poem-overlay/poem-overlay';
import { PoemApiProvider } from '../../providers/poem-api/poem-api';

/**
 * PoemGrid page.
 *
 * That page contains all the poems related to an emotion and one of its advanced emotion state.
 * @param {NavController} navCtrl - Required for navigation on the website.
 * @param {NavParams} navParams - Parameters retrieved from last page.
 * @param {ModalController} modalCtrl - In charge of showing the modal screen (related to poem-overlay).
 * @param {PoemApiProvider} poemApi - Provider to manage the poem API.
 * @param {AngularFireDatabase} db - Website's database.
 */

@IonicPage()
@Component({
  selector: 'page-poem-grid',
  templateUrl: 'poem-grid.html',
})
export class PoemGridPage {

	/*const fs = require('fs');*/

  feels: string; /** Base emotion selected in home page */
  emotion: string; /** Sub-Emotion selected in feels page */
  color: string;

  poems: any = []; /** List of poems tied to the emotion and advanced emotion combo */


  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController, private poemApi: PoemApiProvider) {
    this.feels = this.navParams.get("feel");
    this.emotion = this.navParams.get("emotion");
    this.color = this.navParams.get("color");


    this.poemApi.getPoemsByFeelings(this.emotion, this.feels)
      .then((res) => {console.log(res); this.poems = res})
      .catch(err => console.error(err));

    }

	/** Opens the poem-overlay modal */
  openOverlay(poem: any) {
    let profileModal = this.modalCtrl.create(PoemOverlayPage, { poem: poem });
        profileModal.present();
    }

	/** Test function to check if the page loaded correctly */
  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemGridPage');
  }

}
