import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  selectedImage:string;
  displayMaximizableProfilePic:boolean;
  displayMaximizableProfileCover:boolean;
  profilePic:any;
  profileCovers:any;
  userInfo:FormGroup = new FormGroup({
    Name:new FormControl(''),
    ProfilePic:new FormControl(''),
    ProfileCovers:new FormControl(''),
    About: new FormControl(''),
    DOB:new FormControl(''),
    Location: new FormControl('')
  });
  
  constructor(private http:HttpService,private jwt:JWTService) {
    this.selectedImage = "";
    this.displayMaximizableProfilePic = false;
    this.displayMaximizableProfileCover = false;
    
    this.getUserData();
   }

  ngOnInit(): void {
   
   
  }

  getUserData  = ()=>{
    var token = this.jwt.getToken() ?? "";
    this.http.getUserInfo("",token).subscribe((data)=>{
      this.profilePic = this.getFileinfo(data.Data.Data.ProfilePic);
      this.profileCovers = data.Data.Data.ProfileCovers.map((obj:any)=>{
        return this.getFileinfo(obj)
      });
      if(data.Status == 200){
         this.userInfo.setValue({
          Name:data.Data.Data.Name,
          ProfilePic:this.profilePic.name,
          ProfileCovers:this.reduceFileToName(this.profileCovers),
          About:data.Data.Data.About,
          DOB:this.FromAPIDateFormat(data.Data.Data.DOB),
          Location:data.Data.Data.Location
         })
      }
    });
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

  FromAPIDateFormat = (date:string)=>{
    var splits = date.split('/');
    var new_date = splits[2] + "-" + splits[1] + "-" + splits[0];
    return new_date;
  };

  ToAPIDateFormat = (date:string)=>{
    var splits = date.split('-');
    var new_date = splits[2] + "/" + splits[1] + "/" + splits[0];
    return new_date;
  };

  imgSelectedProfilePic = (name:any)=>{
    this.profilePic = name;
    this.userInfo.patchValue({
      ProfilePic:name.name
    })
    this.displayMaximizableProfilePic = false;
  }

  imgSelectedProfileCover = (name:any)=>{
    this.profileCovers = name;
    var new_images = this.reduceFileToName(name);
    this.userInfo.patchValue({
      ProfileCovers:new_images
    });
    this.displayMaximizableProfileCover = false;
  }

  getFileinfo = (url:string)=>{
    if(url != "" && url != undefined){
      var url_splits = url.split('/');
      var name = url_splits[url_splits.length-1];
      return {
        name:name,
        url:url,
        isSelected:true
      }
    }
    else{
      return {
        name:"",
        url:"",
        isSelected:false
      };
    }
  }

  reduceFileToName = (obj:any)=>{
    return obj.reduce((acc:any,obj:any)=>{
      return acc +obj.name + ",";
    },"");
  }

  getProperCoverImages = (Strobj:string)=>{
    var splits = Strobj.split(',');
    console.log(splits)
    splits.splice(splits.length-1,1);
    return splits;
  }

  onSubmit = ()=>{
    var data = {
      Name:this.userInfo.get('Name')?.value,
      ProfilePic:this.userInfo.get('ProfilePic')?.value,
      ProfileCovers:this.getProperCoverImages(this.userInfo.get('ProfileCovers')?.value),
      About:this.userInfo.get("About")?.value,
      DOB:this.ToAPIDateFormat(this.userInfo.get('DOB')?.value),
      Location:this.userInfo.get('Location')?.value
    }
    this.http.editUserInfo(this.jwt.getToken() ?? "",data).subscribe((data)=>{
      if(data.Status == 200){
        alert("Success");
        this.getUserData();
      }
      else{
        alert("error");
        console.log(data);
      }
    })
    console.log(data);
  }

}
