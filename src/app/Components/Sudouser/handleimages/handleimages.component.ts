import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handleimages',
  templateUrl: './handleimages.component.html',
  styleUrls: ['./handleimages.component.css']
})
export class HandleimagesComponent implements OnInit {
  displayMaximizable:boolean;
  selectedImages:boolean;
  constructor() { 
    this.displayMaximizable = false;
    this.selectedImages = false;
  }

  ngOnInit(): void {
  }

}
