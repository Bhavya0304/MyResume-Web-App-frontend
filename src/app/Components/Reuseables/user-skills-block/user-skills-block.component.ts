import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';
import { ToastService } from 'src/app/Service/Notifications/toast.service';

@Component({
  selector: 'app-user-skills-block',
  templateUrl: './user-skills-block.component.html',
  styleUrls: ['./user-skills-block.component.css']
})
export class UserSkillsBlockComponent implements OnInit {
  @Input() TagObj:any;
  @Output() cancelChange = new EventEmitter<any>();
  @Output() TagObjChange = new EventEmitter<any>();
  @Output() TagObjDelete = new EventEmitter<any>();
  @Input() isEditable:any;
  displayMaximizableProfilePic:boolean;
  profilePic:any;
  constructor(private http:HttpService,private jwt:JWTService,private toast:ToastService,private elementRef:ElementRef) {
    this.displayMaximizableProfilePic = false;
    this.profilePic = {

    }
   }

  ngOnInit(): void {
    this.profilePic.url = this.TagObj.Image
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('img')
                                  .addEventListener('error', this.SetDefaultImg);
  }

  SetDefaultImg = (event:any)=>{
    const target = event.target as HTMLImageElement;
    // Set a default image URL
    target.src = 'assets/Images/no-image.png';
  }

  imgSelectedProfilePic = (name:any)=>{
    this.profilePic = name;
    this.TagObj.Image = name.name;
    this.displayMaximizableProfilePic = false;
  }

  
  cancel = (event:any)=>{
    event.stopPropagation();
    // this.TagObj.isEditable = false;
    this.cancelChange.emit(false);

  }

  removeExtras = (obj:any,extras:string[])=>{
    var newObj = {
      ...obj
    }
    extras.forEach((ele)=>{
        delete newObj[ele];
      });
    return newObj;
    }
    
    UpdateTag = (event:any)=>{
    event.stopPropagation();

        var newObj = this.removeExtras(this.TagObj,['isEditable']);
        if(newObj['_id'] == undefined || newObj['_id'] == null){
          var token = this.jwt.getToken() ?? "";
          
          this.http.addNewUserSkill(newObj,token).subscribe((data)=>{
            if(data.Status == 200){
              console.log(data);
              this.TagObj = data.Data;
              this.TagObjChange.emit(this.TagObj);
              alert("success");
            }
            else{
              alert(data.Error);
            }
          });
        }
        else{
          var token = this.jwt.getToken() ?? "";
          this.http.editUserSkill(newObj,token).subscribe((data)=>{
            if(data.Status == 200){
              this.TagObj = data.Data;
              this.TagObjChange.emit(this.TagObj);
              console.log(data);
              this.toast.addToast({
                severity:'success', 
                summary:'Updated Sucessfully'
              })
            }
            else{
              alert(data.Error);
            }
          });
        }
    }

    deleteTag = (event:any)=>{
      if(this.TagObj['_id'] == undefined || this.TagObj['_id'] == null){
        this.TagObjDelete.emit(true);
      }
      else{
        var token = this.jwt.getToken() ?? "";
        this.http.deleteUserSkill(this.TagObj,token).subscribe((data)=>{
          if(data.Status == 200){
            this.TagObjDelete.emit(true);
            alert("success");
          }
          else{
            alert(data.Error);
          }
        })
      }
    }

}
