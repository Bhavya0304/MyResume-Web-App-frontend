import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-user-tags',
  templateUrl: './user-tags.component.html',
  styleUrls: ['./user-tags.component.css']
})
export class UserTagsComponent implements OnInit {

  userTags:any;
  userTagsOriginal:any;
  isloaded:boolean=false;
  constructor(private http:HttpService,private jwt:JWTService) { }

  ngOnInit(): void {
    this.getUserInfoTag();
  }

  getUserInfoTag = ()=>{
    var token = this.jwt.getToken();
    this.http.getUserInfoTag("",token ?? "").subscribe((data)=>{
      this.isloaded = true;
      if(data.Status == 200){
        this.userTags = data.Data.Data;
        this.userTags = this.userTags.map((ele:any)=>{
          return {
            isEditable:false,
            ...ele
          }
        });
        this.userTagsOriginal =this.userTags.map((a: any)=>({...a}));
      }
    });
  }
  MakeEditable = (event:any)=>{
    this.userTags.map((ele:any)=>{
      ele.isEditable = false;
      return ele;
    })
    event.isEditable = true;
  }
  TagUpdate = (event:any,index:number)=>{
    console.log(index);
    this.userTagsOriginal[index] = {...event};
    event.isEditable = false;
    this.userTags[index].isEditable = false;
  }
  cancelChange = (index:number)=>{
    this.userTags[index] = {...this.userTagsOriginal[index]};
    this.userTags[index].isEditable = false;
  }
  AddNewTag=()=>{
    var newObj = {
      Tag_Name:"New Tag",
      Link:"",
      isEditable:false
    }
    this.userTags.push(newObj);
    this.userTagsOriginal.push({...newObj});
    this.MakeEditable(this.userTags[this.userTags.length-1]);
  }
  Delete = (index:number)=>{
    this.userTags.splice(index,1);
    this.userTagsOriginal.splice(index,1);
  }

}
