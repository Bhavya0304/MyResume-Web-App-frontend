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
}
