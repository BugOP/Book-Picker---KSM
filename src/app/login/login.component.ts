import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

export class WindowService {

  constructor() { }
  get windowRef() {
    return window
  }
}
interface City {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Input() display;
  otp_sent : boolean = false;
  windowRef : any;
  otp: string;
  user : any;
  number : string;

  win = new WindowService();
  width = window.innerWidth;
  cities: City[] = [
    // {value: 'Select City', viewValue: 'Select City'},
    {value: 'Aurangabad', viewValue: 'Aurangabad'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Delhi', viewValue: 'Delhi'}
  ];


  constructor( private route : Router, public authService : AuthService, public _http : HttpClient) {

   }

  ngOnInit(): void {
    if (localStorage.getItem('logOut') ==='true'){
      firebase.auth().signOut();
      localStorage.removeItem('IsLoggedIn')
      localStorage.removeItem('logOut')
    }
    if (localStorage.getItem('IsLoggedIn') ===null || localStorage.getItem('IsLoggedIn') === 'undefined') {
    }else {
      this.route.navigate(['/home'])
    }
    if( this.width<1200 ) {
      this.display = true;
    }else { this.display = false ;}
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {'size':"invisible"})

    this.windowRef.recaptchaVerifier.render()
  }
  async SendOtp(){
    const appVerifier = this.windowRef.recaptchaVerifier;
    await this.authService.SendOtp('+91'+this.number, appVerifier);
    if (this.authService.windowRef.confirmationResult){
      this.otp_sent = true;
    }
  }
  async VerifyOtp() {
    await this.authService.VerifyOtp(this.otp);
    if (this.authService.loggedIn === true ) {
      this.route.navigate(['/nickname']);
    }
  }
}
