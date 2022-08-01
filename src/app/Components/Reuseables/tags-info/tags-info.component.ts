import { Component, OnInit } from '@angular/core';
// import tag from '../../../../Data/tags_info.json';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-tags-info',
  templateUrl: './tags-info.component.html',
  styleUrls: ['./tags-info.component.css']
})
export class TagsInfoComponent implements OnInit {
  tags:any;
  constructor(private http:HttpService) {
    
   }

  ngOnInit(): void {
    this.http.getUserInfoTag().subscribe((Response)=>{
      if(Response.Status == 200){
        this.tags = Response.Data.Data;
      }
      else{
        console.log(Response.Error);
      }
    })
  }

}
