import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';
import { ToastService } from 'src/app/Service/Notifications/toast.service';

@Component({
  selector: 'app-user-tags-block',
  templateUrl: './user-tags-block.component.html',
  styleUrls: ['./user-tags-block.component.css']
})
export class UserTagsBlockComponent implements OnInit {

  @Input() TagObj:any;
  @Output() cancelChange = new EventEmitter<any>();
  @Output() TagObjChange = new EventEmitter<any>();
  @Output() TagObjDelete = new EventEmitter<any>();
  @Input() isEditable:any;
  constructor(private http:HttpService,private jwt:JWTService,private toast:ToastService) { }

  ngOnInit(): void {
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
          this.http.addNewUsertag(newObj,token).subscribe((data)=>{
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
          this.http.editUsertag(newObj,token).subscribe((data)=>{
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
        this.http.deleteUsertag(this.TagObj,token).subscribe((data)=>{
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
