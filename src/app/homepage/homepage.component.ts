import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  user : any;
  Arr = Array;
  num = [1,2,3,4,5,6,7,8,9];
  constructor(public router : Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('location') === null || localStorage.getItem('location') === "undefined") {
      this.router.navigate(['/location'])
    } else
    if (localStorage.getItem('genres') === null) {
      this.router.navigate(['/select-genre'])
    }
  }

}
