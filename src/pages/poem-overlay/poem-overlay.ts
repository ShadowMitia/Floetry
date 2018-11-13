import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * PoemOverlayPage page.
 *
 * Page containing a poem with a favourite and a share button.
 * Meant to be used as a modal page.
 * @constructor
 * @params {viewController} viewControl - controls the view for modal implementation.
 * @params {navController} navParams - needed to navigate through the website.
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
  poemId: String;

  constructor(public viewCtrl: ViewController, public params: NavParams) {
    this.poem = this.params.get("poem");
    this.text = this.poem.text;
    this.title = this.poem.title;
    this.author = this.poem.author;
    this.poemId = this.poem.poemId;
    console.log("poeeeem", this.poem);
  }

  /**
  * (unused) Shows a message on the console. Used for debugging purposes.
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad PoemOverlayPage');
  }

  /**
  * Close the modal page.
  */
	dismiss() {
        this.viewCtrl.dismiss();
    }
}
