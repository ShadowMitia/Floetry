import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ShareOverlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-overlay',
  templateUrl: 'share-overlay.html',
})
export class ShareOverlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private viewCtrl: ViewController) 
  {
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareOverlayPage');
  }

  	dismiss() {
		this.viewCtrl.dismiss();
	}
	
	shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }
  
  smsShare() {
    this.socialSharing.shareViaSMS("shareViaSMS", "mobile-no").then(() => {
      console.log("shareViaSMS: Success");
    }).catch(() => {
      console.error("shareViaSMS: failed");
    });
  }
  
  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("shareViaWhatsApp", "teimage", "teUrl").then(() => {
      console.log("shareViaWhatsApp: Success");
    }).catch(() => {
      console.error("shareViaWhatsApp: failed");
    });
  }
  
  facebookShare() {
    this.socialSharing.shareViaFacebook("shareViaFacebook", "teimage", "teUrl").then(() => {
      console.log("shareViaFacebook: Success");
    }).catch(() => {
      console.error("shareViaFacebook: failed");
    });
  }

}
