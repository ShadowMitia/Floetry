import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { PoemGridPage } from '../poem-grid/poem-grid';

/**
 * Generated class for the PoemOverlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-poem-overlay',
  templateUrl: 'poem-overlay.html',
})
export class PoemOverlayPage {
    text: string;
    title: string;

    constructor(public viewCtrl: ViewController, public params: NavParams) {
        this.title = this.params.get("title");
        this.text = this.params.get("text");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemOverlayPage');
  }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
