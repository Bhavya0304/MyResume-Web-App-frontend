import { Component, OnInit } from '@angular/core';
// import tag from '../../../../Data/tags_buttons.json';
import { Directive, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-tags-button',
  templateUrl: './tags-button.component.html',
  styleUrls: ['./tags-button.component.css']
})
export class TagsButtonComponent implements OnInit {
  buttons:any;
  display_buttons:any;
  showAll:any;
  showLess:any;
  onMouseEnter:any;
  allShowing = false;
  constructor(private http:HttpService,private route : ActivatedRoute, private router : Router) { 
    
   }
  
  ngOnInit(): void {
    var user = this.route.snapshot.paramMap.get('id');
    if(user == ""){
      user = "bhavya0304";
    }
    this.http.getUserSkillTag(user).subscribe((Response)=>{
      console.log(Response);
      if(Response.Status == 200){
        this.buttons = Response.Data.Data;
        this.display_buttons = this.buttons.length > 8 ? this.buttons.slice(0,8) : this.buttons;
      }
      else{
        console.log(Response.Error);
      }
    });
    
    this.showAll = function(){
      this.display_buttons = this.display_buttons.length <= 8 ? this.buttons : this.buttons.slice(0,8);
      this.allShowing = !this.allShowing;
    } 
   
   
  }

}
