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
  author: string;
  title: string;
  poem: any;

    constructor(public viewCtrl: ViewController, public params: NavParams) {
        this.poem = this.params.get("poem");
      this.text = this.poem.text;
      this.title = this.poem.title;
      this.author = this.poem.author;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemOverlayPage');
  }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
