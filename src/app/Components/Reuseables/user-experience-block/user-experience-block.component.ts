import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';
import { ToastService } from 'src/app/Service/Notifications/toast.service';

@Component({
  selector: 'app-user-experience-block',
  templateUrl: './user-experience-block.component.html',
  styleUrls: ['./user-experience-block.component.css']
})
export class UserExperienceBlockComponent implements OnInit {
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
    this.profilePic.url = this.TagObj.logo
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
    this.TagObj.logo = name.name;
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
          this.http.addNewUserExperience(newObj,token).subscribe((data)=>{
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
          this.http.editUserExperience(newObj,token).subscribe((data)=>{
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
        this.http.deleteUserExperience(this.TagObj,token).subscribe((data)=>{
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

    public config: any = {
      height:300,
      toolbar: [
        ['misc', ['codeview','codeBlock']],
        [
          'font',
          [
            'bold',
            'italic',
            'underline',
          ]
        ],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style0', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'link', 'hr']],
        ['customButtons', ['testBtn']],
        ['view', ['fullscreen', 'codeview', 'help']]
      ],
    };

}
