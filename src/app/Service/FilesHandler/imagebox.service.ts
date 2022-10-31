import { Injectable } from '@angular/core';
import { JWTService } from '../Authentication/jwt.service';
import { HttpService } from '../Network/http.service';


@Injectable({
  providedIn: 'root'
})
export class ImageboxService {

  constructor(private jwt:JWTService,private http:HttpService) { }

  getImages = ()=>{
    var token:string = this.jwt.getToken() ?? "";
    return new Promise((resolve,reject)=>{
      this.http.getfiles(token).subscribe((data)=>{
        if(data.Status == 200){
          resolve(data.Data);
        }
        else{
          reject(data.Error);
        }
      })
    });

  };

  uploadImages = (files:any)=>{
    var token:string = this.jwt.getToken() ?? "";
    console.log(files.get('files'));
    return new Promise((resolve,reject)=>{
      this.http.uploadfiles(token,files).subscribe((data)=>{
        console.log(data);
        if(data.Status == 200){
          resolve(data.Data);
        }
        else{
          reject(data.Error);
        }
      })
    });
  };

  deleteImages = (files:string[])=>{
    var token:string = this.jwt.getToken() ?? "";
    return new Promise((resolve,reject)=>{
      this.http.deletefiles(token,files).subscribe((data)=>{
        if(data.Status == 200){
          resolve(data.Data);
        }
        else{
          reject(data.Error);
        }
      })
    });

  };
}
