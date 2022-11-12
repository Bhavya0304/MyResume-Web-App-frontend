import { Component, OnInit } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css'],
  providers:[MessageService]
})
export class UploadResumeComponent implements OnInit {
  showCancel:boolean = false;
  constructor(private jwt:JWTService,private http:HttpService,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  myUploader = (event:any,element:any)=>{
    var formData = new FormData();
    formData.append('files',event.files[0]);
    var token = this.jwt.getToken() ?? "";
    this.http.uploadResume(token,formData).subscribe((response)=>{
      if(response.Status == 200){
        this.messageService.add({severity:'success', summary:'Uploaded Sucessfully', detail:'Resume is uploaded and live on the Site!'});
      }
      else{
        this.messageService.add({severity:'error', summary:'Upload! failed', detail:response.Error?.toString()});
      }
      element.clear();
      this.showCancel = false;
    });
  }
  CancelUpload = (element:any)=>{
    element.clear();
    this.showCancel = false;
  }

}
