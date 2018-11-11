import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  info = {
    email: "",
    password: "",
    password2: "",
    username: "",
    firstname: "",
    lastname: ""

  };

  signup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthenticationProvider, private toast : ToastController, private formBuilder: FormBuilder) {


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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

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
