import { Injectable } from '@angular/core';
import { Response } from 'src/app/Interfaces/Response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  host:string;
  server:string;
  constructor(private http:HttpClient) {
    this.host = environment.API_URI;
    this.server = environment.ADMIN_URI;
   }
   getUserInfo = (user:String|null,token?:string)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserinfo',{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.get<Response>(this.host+'getuserinfo/'+user,{headers:{ Authorization:token ?? ""}});
    }
    
  }
  getUserEducation = (user:String|null,token?:string)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getusereducation',{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.get<Response>(this.host+'getusereducation/'+user,{headers:{ Authorization:token ?? ""}});
    }
  }
  getUserExperience = (user:String|null,token?:string)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserexperience',{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.get<Response>(this.host+'getuserexperience/'+user,{headers:{ Authorization:token ?? ""}});
    }
    
  }
  getUserInfoTag = (user:String|null,token?:string)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserinfotag',{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.get<Response>(this.host+'getuserinfotag/'+user,{headers:{ Authorization:token ?? ""}});
    }
  }
  getUserSkillTag = (user:String|null,token?:string)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserskilltag',{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.get<Response>(this.host+'getuserskilltag/'+user,{headers:{ Authorization:token ?? ""}});
    }
  }
  getUserSocialButton = (user:String|null,token?:string)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getsocialbutton',{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.get<Response>(this.host+'getsocialbutton/'+user,{headers:{ Authorization:token ?? ""}});
    }
  }
  getUserTimeline = (user:String|null,data:any,token?:string)=>{
    if(!user || user == ""){
      return this.http.post<Response>(this.host+'getusertimeline',data,{headers:{ Authorization:token ?? ""}});
    }
    else{
      return this.http.post<Response>(this.host+'getusertimeline/'+user,data,{headers:{ Authorization:token ?? ""}});
    }
  }
  verifyUser = (Token:string)=>{
      return this.http.get<Response|any>(this.server+'verifyuser',{headers:{ Authorization:Token}});
  }

  editUserInfo = (Token:string,data:any)=>{
    console.log(Token);
    return this.http.post<Response>(this.server+'userinfoedit',{Data:data},{headers:{ Authorization:Token}});
  }

  getfiles = (Token:string)=>{
    return this.http.get<Response>(this.server+'getallfiles',{headers:{ Authorization:Token}});
  }
  uploadfiles = (Token:string,files:any)=>{
    return this.http.post<Response>(this.server+'uploadfiles',files,{headers:{ Authorization:Token,Accept:"multipart/form-data"}});
  }
  uploadResume = (Token:string,files:any)=>{
    return this.http.post<Response>(this.server+'uploadresume',files,{headers:{ Authorization:Token,Accept:"multipart/form-data"}});
  }
  deletefiles = (Token:string,files:any[])=>{
    return this.http.post<Response>(this.server+'deletefiles',{files:files},{headers:{ Authorization:Token}});
  }
  userLogin = (username:string,password:string)=>{
      return this.http.post<Response>(this.server+'login',{username:username,password:password});
  }
  addNewUsertag = (data:any,token:string)=>{
      return this.http.post<Response>(this.server+'userinfotagadd',{data:data},{headers:{ Authorization:token}});
  }

  editUsertag = (data:any,token:string)=>{
    return this.http.post<Response>(this.server+'userinfotagedit',{data:data},{headers:{ Authorization:token}});
  }
  deleteUsertag = (data:any,token:string)=>{
      return this.http.post<Response>(this.server+'userinfotagdelete',{data:data},{headers:{ Authorization:token}});
}
addNewUserSkill = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'userskilltagadd',{data:data},{headers:{ Authorization:token}});
}

editUserSkill = (data:any,token:string)=>{
return this.http.post<Response>(this.server+'userskilltagedit',{data:data},{headers:{ Authorization:token}});
}

editUserSkillOrder = (data:any[],token:string)=>{
  return this.http.post<Response>(this.server+'userskilltagreorder',{data:data},{headers:{ Authorization:token}});
  }

deleteUserSkill = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'userskilltagdelete',{data:data},{headers:{ Authorization:token}});
}
addNewUserSocial = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'usersocialbuttonadd',{data:data},{headers:{ Authorization:token}});
}

editUserSocial = (data:any,token:string)=>{
return this.http.post<Response>(this.server+'usersocialbuttonedit',{data:data},{headers:{ Authorization:token}});
}
deleteUserSocial = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'usersocialbuttondelete',{data:data},{headers:{ Authorization:token}});
}
addNewUserEducation = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'usereducationadd',{data:data},{headers:{ Authorization:token}});
}

editUserEducation = (data:any,token:string)=>{
return this.http.post<Response>(this.server+'usereducationedit',{data:data},{headers:{ Authorization:token}});
}

editUserEducationOrder = (data:any[],token:string)=>{
  return this.http.post<Response>(this.server+'usereducationreorder',{data:data},{headers:{ Authorization:token}});
  }

deleteUserEducation = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'usereducationdelete',{data:data},{headers:{ Authorization:token}});
}
addNewUserExperience = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'userexperienceadd',{data:data},{headers:{ Authorization:token}});
}

editUserExperience = (data:any,token:string)=>{
return this.http.post<Response>(this.server+'userexperienceedit',{data:data},{headers:{ Authorization:token}});
}

editUserExperienceOrder = (data:any[],token:string)=>{
  return this.http.post<Response>(this.server+'userexperiencereorder',{data:data},{headers:{ Authorization:token}});
  }

deleteUserExperience = (data:any,token:string)=>{
  return this.http.post<Response>(this.server+'userexperiencedelete',{data:data},{headers:{ Authorization:token}});
}
}
