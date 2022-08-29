import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  isloaded:boolean;

  constructor() {
    this.isloaded = false;
  }

  ngOnInit(): void {
    this.isloaded = true;
  }

}
