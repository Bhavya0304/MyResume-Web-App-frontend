import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  selectedImage:string;
  displayMaximizable1:boolean;
  displayMaximizable2:boolean;
  userInfo:FormGroup = new FormGroup({
    Name:new FormControl(''),
    ProfilePic:new FormControl(''),
    ProfileCovers:new FormControl(''),
    About: new FormControl(''),
    DOB:new FormControl(''),
    Location: new FormControl('')
  });
  
  constructor(private http:HttpService) {
    this.selectedImage = "";
    this.displayMaximizable1 = false;
    this.displayMaximizable2 = false;
    
    this.http.getUserInfo("").subscribe((data)=>{
      if(data.Status == 200){
         this.userInfo.setValue({
          Name:data.Data.Data.Name,
          ProfilePic:data.Data.Data.ProfilePic,
          ProfileCovers:data.Data.Data.ProfileCovers,
          About:data.Data.Data.About,
          DOB:data.Data.Data.DOB,
          Location:data.Data.Data.Location
         })
      }
    });
   }

  ngOnInit(): void {
    console.log(this.userInfo.get('ProfilePic'));
   
  }

  imgSelected1 = (name:any)=>{
    this.selectedImage = name;
    this.displayMaximizable1 = false;
  }

  imgSelected2 = (name:any)=>{
    this.selectedImage = name;
    this.displayMaximizable2 = false;
  }

}
