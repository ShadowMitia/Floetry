import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoemGridPage } from '../poem-grid/poem-grid';

@IonicPage()
@Component({
  selector: 'page-feels',
  templateUrl: 'feels.html',
})
export class FeelsPage {

	feels: string;
	  emoLst: Array<any>;
    feelsColor:string;
	constructor(public navCtrl: NavController, public navParams: NavParams)
	{
		this.feels = this.navParams.get('feel');
      this.feelsColor = this.navParams.get('color');
      this.feels = this.feels.toLowerCase();
      this.feels = this.feels.trim();

      console.log("Got emotion: ", this.feels);

		  let emotions = {
          "happy": {subEmotions: ['content', 'in love', 'inspired', 'thankful'],
                    color: "#F7D26C"
                   },
          "sad":  {subEmotions: ['depressed', 'mournful', 'regretful', 'disappointed'],
                   color: "#67829F"
                  },
          "angry":  {subEmotions: ['defensive', 'disgusted', 'frustrated', 'offended'],
                     color: "#A70032"
                    },
          "anxious":  {subEmotions: ['afraid', 'worried', 'stressed', 'nervous'],
                       color: "#D25668"
                      },
          "ashamed":  {subEmotions: ['isolated', 'pathetic', 'inferior', 'guilty'],
                           color: "#C383D7"
                          },
          "hurt":  {subEmotions: ['abandonned', 'betrayed', 'shocked', 'victimized'],
                    color: "#EB5593"
                   }
      };

      this.emoLst = emotions[this.feels];

      console.log("Sub emotion list: ", this.emoLst);


	}

    openPage(emotion:string) {
        this.navCtrl.push(PoemGridPage, {feel: this.feels, emotion: emotion});
    }

	ionViewDidLoad()
	{
		console.log('ionViewDidLoad FeelsPage');
	}

}
