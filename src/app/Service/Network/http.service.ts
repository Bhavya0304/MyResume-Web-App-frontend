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
   getUserInfo = (user:String|null)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserinfo');
    }
    else{
      return this.http.get<Response>(this.host+'getuserinfo/'+user);
    }
    
  }
  getUserEducation = (user:String|null)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getusereducation');
    }
    else{
      return this.http.get<Response>(this.host+'getusereducation/'+user);
    }
  }
  getUserExperience = (user:String|null)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserexperience');
    }
    else{
      return this.http.get<Response>(this.host+'getuserexperience/'+user);
    }
    
  }
  getUserInfoTag = (user:String|null)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserinfotag');
    }
    else{
      return this.http.get<Response>(this.host+'getuserinfotag/'+user);
    }
  }
  getUserSkillTag = (user:String|null)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getuserskilltag');
    }
    else{
      return this.http.get<Response>(this.host+'getuserskilltag/'+user);
    }
  }
  getUserSocialButton = (user:String|null)=>{
    if(!user || user == ""){
      return this.http.get<Response>(this.host+'getsocialbutton');
    }
    else{
      return this.http.get<Response>(this.host+'getsocialbutton/'+user);
    }
  }
  getUserTimeline = (user:String|null,data:any)=>{
    if(!user || user == ""){
      return this.http.post<Response>(this.host+'getusertimeline',data);
    }
    else{
      return this.http.post<Response>(this.host+'getusertimeline/'+user,data);
    }
  }
  verifyUser = (Token:string)=>{
      return this.http.get<Response>(this.server+'verifyuser',{headers:{ Authorization:Token}});
  }
  userLogin = (username:string,password:string)=>{
      return this.http.post<Response>(this.server+'login',{username:username,password:password});
  }
}
