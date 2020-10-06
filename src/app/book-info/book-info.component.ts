import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.sass']
})
export class BookInfoComponent implements OnInit {
  num = [1,2,3,4,5,6]
  num_mob = [1,2,3]
  constructor() { }

  ngOnInit(): void {
  }

}
