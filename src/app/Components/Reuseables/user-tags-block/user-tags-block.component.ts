import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tags-block',
  templateUrl: './user-tags-block.component.html',
  styleUrls: ['./user-tags-block.component.css']
})
export class UserTagsBlockComponent implements OnInit {

  @Input() TagObj:any;
  constructor() { }

  ngOnInit(): void {
  }

}
