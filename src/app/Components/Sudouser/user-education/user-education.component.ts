import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-user-education',
  templateUrl: './user-education.component.html',
  styleUrls: ['./user-education.component.css']
})
export class UserEducationComponent implements OnInit {

  userTags:any;
  userTagsOriginal:any;
  isloaded:boolean=false;
  constructor(private http:HttpService,private jwt:JWTService,private dragulaService: DragulaService) {
    dragulaService.destroy("HANDLES")
    dragulaService.createGroup("HANDLES", {
      moves: (el, container, handle:any) => {
        return handle.className === 'handle';
      }
    });
    dragulaService.drop("HANDLES").subscribe(()=>{
      this.ReCreateIndexing()
    })
   }

  ngOnInit(): void {
    this.getEducation();
  }

  getEducation = ()=>{
    var token = this.jwt.getToken();
    this.http.getUserEducation("",token ?? "").subscribe((data)=>{
      this.isloaded = true;
      if(data.Status == 200){
        this.userTags = data.Data.Data.sort((n1:any,n2:any) => 
          {
            return n1.order - n2.order; 
          });
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

  ReCreateIndexing = ()=>{
    

    this.userTagsOriginal = this.userTagsOriginal.map((e:any,index:number)=>{
      e.order = index + 1
      return e
    })

    this.userTags = this.userTagsOriginal.map((a: any)=>({...a}));
    var token = this.jwt.getToken() ?? "";
    this.http.editUserEducationOrder(this.userTags,token).subscribe((data)=>{
      if(data.Status == 200){
        
      }
      else{
        alert(data.Error);
      }
    })

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
      Type:"Unnamed Education",
      Value:"",
      order:this.userTags.length,
      logo:"",
      Year_from:"",
      Year_to:"",
      About:"",
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
