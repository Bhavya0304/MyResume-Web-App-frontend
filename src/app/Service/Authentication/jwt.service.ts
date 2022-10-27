import { Injectable } from '@angular/core';
import { HttpService } from '../Network/http.service';
import { LocalStorageService } from '../Storage/local-storage.service'


@Injectable({
  providedIn: 'root'
})
export class JWTService {

  StorageClass:LocalStorageService;
  isLogged:boolean;

  constructor(private Local : LocalStorageService,private http:HttpService) {
    this.StorageClass = Local;
    this.isLogged = true;
   }

   verifyUser = ()=>{
    // if(this.isLogged){
    //   var token = this.StorageClass.getValue("Token");
    // }
   }

   loginUser = (username:string,password:string)=>{
        return new Promise((resolve,reject)=>{this.http.userLogin(username,password).subscribe((data)=>{
        if(data){
          if(data.Status == 200){
            var token = data.Data.token;
            if(token){
              this.isLogged = true;
              this.StorageClass.saveTo("Token",token);
              resolve(true);
            }
            else{
              resolve(false);
            }
          }
          else{
            resolve(false);
          }
        }
        else{
          resolve(false);
        }
      });
      
    });
   }

   logout = ()=>{
      this.StorageClass.deleteValue("Token");
      this.isLogged = false;
   }



   
}
