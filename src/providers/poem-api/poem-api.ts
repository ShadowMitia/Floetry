import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the PoemApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoemApiProvider {

  constructor(private db : AngularFireDatabase) {
    console.log('Hello PoemApiProvider Provider');
  }

  getPoemsByFeeling(feels: string, emotion: string) {
    feels = feels.toLowerCase();
    emotion = emotion.toLowerCase();

    console.log(feels, emotion);

    let result = [];
  }

  getPoemsByAuthor(author: string) {
    return [];
  }

  getPoemsById(id: number) {
    return [];
  }
}
