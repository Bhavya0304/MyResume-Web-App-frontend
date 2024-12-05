import { Component, OnInit } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.css']
})
export class UserTimelineComponent implements OnInit {

  userTags:any;
  userTagsOriginal:any;
  isloaded:boolean=false;
  constructor(private http:HttpService,private jwt:JWTService) {
    
   }

  ngOnInit(): void {
    this.getUserSkillTag();
  }

  getUserSkillTag = ()=>{
    var token = this.jwt.getToken();
    this.http.getUserTimeline("",token ?? "").subscribe((data)=>{
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

  
  MakeEditable = (event:any,index:number|null = null)=>{
    if(this.userTags.some((x:any)=>!x._id) && index != 0 ){
      this.Delete(0)
    }
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
    if(this.userTags.some((x:any)=>!x._id)){
      return
    }
    
    var newObj = {
      Social_Media_Name:"New Skill",
      Link:"",
      Image:"",
      isEditable:false
    }
    this.userTags.unshift(newObj);
    this.userTagsOriginal.unshift({...newObj});
    this.MakeEditable(this.userTags[0],0);
  }
  Delete = (index:number)=>{
    this.userTags.splice(index,1);
    this.userTagsOriginal.splice(index,1);
  }


}
