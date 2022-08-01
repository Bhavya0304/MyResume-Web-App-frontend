import { Injectable } from '@angular/core';
import { Response } from 'src/app/Interfaces/Response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  host:string;
  constructor(private http:HttpClient) {
    this.host = environment.API_URI;
   }
   getUserInfo = ()=>{
    return this.http.get<Response>(this.host+'getuserinfo');
  }
  getUserEducation = ()=>{
    return this.http.get<Response>(this.host+'getusereducation');
  }
  getUserExperience = ()=>{
    return this.http.get<Response>(this.host+'getuserexperience');
  }
  getUserInfoTag = ()=>{
    return this.http.get<Response>(this.host+'getuserinfotag');
  }
  getUserSkillTag = ()=>{
    return this.http.get<Response>(this.host+'getuserskilltag');
  }
  getUserSocialButton = ()=>{
    return this.http.get<Response>(this.host+'getsocialbutton');
  }
  getUserTimeline = (data:any)=>{
    return this.http.post<Response>(this.host+'getusertimeline',data);
  }
}
