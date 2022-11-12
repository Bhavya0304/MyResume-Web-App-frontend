import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-user-tags',
  templateUrl: './user-tags.component.html',
  styleUrls: ['./user-tags.component.css']
})
export class UserTagsComponent implements OnInit {

  userTags:any;
  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  getUserInfoTag = ()=>{
    // this.http.getUserInfoTag()
  }

}
