import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Signup page.
 *
 * @constructor
 * @param {NavController} navCtrl - Required for navigation on the website.
 * @param {NavParams} navParams - Parameters retrieved from last page.
 * @param {AuthenticationProvider} auth - User's account authentication.
 * @param {ToastController} toast - Controller for that one window that pops up from the top or the bottom.
 * @param {FormBuilder} formBuilder - Used to build forms (duh !).
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  info = {
    email: "", /** Email of the user. */
    password: "", /** Password */
    password2: "", /** Password confirmation */
    username: "", /** Name of the user on the website */
    firstname: "", /** First name */
    lastname: "" /** Last name. */

  };

  signup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationProvider, private toast : ToastController, private formBuilder: FormBuilder) {

    // https://stackoverflow.com/questions/31788681/angular2-validator-which-relies-on-multiple-form-fields/34582914#34582914
    function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
      return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
          return {
            mismatchedPasswords: true
          };
        }
      }
    }

    this.signup = this.formBuilder.group({
      email: ['', Validators.required && Validators.email ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.compose([Validators.required,Validators.minLength(6)])],
      firstname: [''],
      lastname: [''],
      username: ['', Validators.required]
    }, {validator: matchingPasswords('password', 'confirmPassword')});

  }

  /**
  * (unused) Shows a message on the console. Used for debugging purposes.
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  /** Adds the user account to the database */
  createAccount() {
      this.info = {
        email: this.signup.value["email"],
        password: this.signup.value["password"],
        password2: "",
        username: this.signup.value["username"],
        firstname: this.signup.value["firstname"] || "",
        lastname: this.signup.value["lastname"] || ""
      };
      this.auth.createAccount(this.info);
      this.navCtrl.popToRoot();

  }

}
