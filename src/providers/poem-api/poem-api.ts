import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * PoemApi provider.
 *
 * Provider used to get the poems from the database.
 * @constructor
 * @param {AngularFireDatabase} db : the website's database.
 */

/*
For later:
- pagination: https://howtofirebase.com/collection-queries-with-firebase-b95a0193745d
 */

@Injectable()
export class PoemApiProvider {

  constructor(private db : AngularFireDatabase) {
    console.log('Hello PoemApiProvider Provider');
  }

  /** Fetch all the poems related to an emotion and one of its advanced states 
  * @param {String} emotion - the primary emotion.
  * @param {String} feelings - the advanced state.
  */
  getPoemsByFeelings(emotion: string, feelings: string) {
    feelings = feelings.toLowerCase();
    emotion = emotion.toLowerCase();
    console.log("feels", feelings, emotion);
    let res = this.db.database.ref("poems/");
    return new Promise((resolve, reject) => {
      res.on("value", value => {
        let poems = [];
        for (let poemKey of Object.keys(value.val())) {
          let poem = value.val()[poemKey];
          poem.poemId = poemKey;
          if (poem.emotion.toLowerCase() == feelings.toLowerCase()
              && poem.feeling.toLowerCase() == emotion.toLowerCase()) {
            console.log(poem);
            poems = [...poems, poem];
          }
        }
        if (poems == null) reject(null);
        resolve(poems);
      });
    });
  }

  /** Fetch a poem based on its ID
  * @param {String} id - ID of the poem.
  */
  getPoemById(id: string) {
    let res = this.db.database.ref("poems/" + id + "/");
    return new Promise((resolve, reject) => {
      res.on("value", val => {
        if (val == null) reject("No poem with this id: " + id)
        resolve(val);
      });
    });
  }
}
