import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth }  from 'firebase/app';
import { ToastController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


export interface UserData {
  favorites: Array<number>,
  firstname: string,
  lastname: string
}

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  private user: firebase.User;
  private userData : UserData;

  constructor(public afAuth: AngularFireAuth, private toastCtrl : ToastController, private db : AngularFireDatabase) {
    console.log('Hello AuthenticationProvider Provider');

    afAuth.authState.subscribe(user => {
			this.user = user;
    });
  }

  createAccount(info) {
    this.afAuth.auth.createUserWithEmailAndPassword(info.email, info.password)
      .then((value) => {
        this.toastCtrl.create({message: "Account successfully created!", duration: 2000}).present();
        this.afAuth.authState.subscribe(user => {
			    this.user = user;
          this.user.sendEmailVerification();
          this.user.updateProfile({
            displayName: info.displayname,
            photoURL: ""
          });

          this.db.database.ref("users/"+this.user.uid).push({
            firstname: info.firstname,
            lastname: info.lastname,
            favorites: []
          });

        });


      } )
      .catch(function(error) {
        console.error(error);
  });
  }

  signInWithEmail(credentials) {
		console.log('Sign in with email', credentials);
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			                                                 credentials.password);
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((value) => this.toastCtrl.create({message: "Succesffully logged out!", duration: 2000}).present() )
      .catch((value) => console.error(value));
  }

  isUserLoggedIn() {
    console.log(this.user);
    if (this.user) {
      console.log("User logged in");
      return true;
    } else {
      console.log("User not logged in");
      return false;
    }
  }

  getUserDisplayName() {
    return this.user.displayName;
  }

  getUserPhotoURL() {
    return this.user.photoURL;
  }

  getUserEmail() {
    return this.user.email;
  }

  getUserID() {
    return this.user.uid;
  }

}
