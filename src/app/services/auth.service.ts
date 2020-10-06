import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class WindowService {

  constructor() { }
  get windowRef() {
    return window
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  win = new WindowService();
  windowRef;
  user;
  idToken;
  url = 'https://06e7bff649d5.ngrok.io'
  loggedIn = false;
  constructor(private _http: HttpClient) {
    this.windowRef = this.win.windowRef;
  }
  ngOnInit() {
  }
  async SendOtp(ph_num, appVerifier) {
    await firebase.auth().signInWithPhoneNumber(ph_num, appVerifier).then(result => {
      this.windowRef.recaptchaVerifier = appVerifier;
      this.windowRef.confirmationResult = result;
      localStorage.setItem('number', ph_num.substring(3))
    }).catch(error => {
      console.log(error);
    });
  }
  async VerifyOtp(otp) {
    await this.windowRef.confirmationResult.confirm(otp).then(
      user => {
        this.loggedIn = true;
        this.user = user;
        localStorage.setItem('IsLoggedIn', 'true');
      }
    ).catch(error => {
      window.alert("Incorrect Otp");
    })
  }
  LogOut() {
    firebase.auth().signOut()
    localStorage.removeItem('IsLoggedIn');
  }
  async verifyToken() {
    await this.GetToken().then( token => {
      console.log(token)
    },
      error => {
      console.log(error)
    });
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this._http.get(this.url + '/verify', {headers: headers, withCredentials: true}).subscribe(
      response =>{
        console.log("successfull",response);
      },
      error => {
        console.log(error);
      }
    )
  }
  GetToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged( user => {
        if (user) {
          user.getIdToken().then(idToken => {
            this.idToken = idToken;
            resolve(idToken);    
          });
        }
      },
      error => {
        console.log(error);
        reject(error);
      }
      );
    })
  }
}
