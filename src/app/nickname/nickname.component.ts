import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.sass']
})
export class NicknameComponent implements OnInit {
  nickname;
  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  setNickname(){
    localStorage.setItem('nickname', this.nickname)
    this.route.navigate(['/home'])
  }

}
