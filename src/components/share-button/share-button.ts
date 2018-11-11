import { Component } from '@angular/core';
import { ModalController, NavParams } from 'ionic-angular';
import { ShareOverlayPage } from '../../pages/share-overlay/share-overlay';

/**
 * Generated class for the ShareButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
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

  openModal()
  {
	  let myModal = this.modalCtrl.create(ShareOverlayPage);
	  myModal.present();
  }
}
