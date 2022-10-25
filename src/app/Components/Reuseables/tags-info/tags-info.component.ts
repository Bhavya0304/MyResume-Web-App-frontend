import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import tag from '../../../../Data/tags_info.json';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-tags-info',
  templateUrl: './tags-info.component.html',
  styleUrls: ['./tags-info.component.css']
})
export class TagsInfoComponent implements OnInit {
  tags:any;
  constructor(private http:HttpService,private route : ActivatedRoute, private router : Router) {
    
   }

  ngOnInit(): void {
    var user = this.route.snapshot.paramMap.get('id');
    this.http.getUserInfoTag(user).subscribe((Response)=>{
      if(Response.Status == 200){
        this.tags = Response.Data.Data;
      }
      else{
        console.log(Response.Error);
      }
    })
  }

}
