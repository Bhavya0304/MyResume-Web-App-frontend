import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinnner',
  templateUrl: './spinnner.component.html',
  styleUrls: ['./spinnner.component.css']
})
export class SpinnnerComponent implements OnInit {
  @Input() isloaded:boolean;
  loaded:boolean = true;
  constructor() {
    this.isloaded = false;
   }

  ngOnInit(): void {
  }

}
