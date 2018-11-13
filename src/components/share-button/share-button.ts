import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { ShareOverlayPage } from '../../pages/share-overlay/share-overlay';

/**
 * ShareButton Component
 *
 * Creates a button with the purpose of sharing the poem on the internet.
 *
 * @constructor
 * @param {string} text - Text contained inside the button.
 */
@Component({
  selector: 'share-button',
  templateUrl: 'share-button.html'
})
export class ShareButtonComponent {

  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello ShareButtonComponent Component');
  }

/** Opens the modal window related to the share button.
*/
  openModal()
  {
	  let myModal = this.modalCtrl.create(ShareOverlayPage);
	  myModal.present();
  }
}
