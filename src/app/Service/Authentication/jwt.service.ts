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
    this.isLogged = false;
   }

   verifyUserBasic = ():boolean=>{
    if(this.getToken() == "" || this.getToken() == undefined){
      return false;
    }
    else{
      return true;
    }
   }

   verifyUser = ():Promise<boolean>=>{
    console.log("here1");
    if(this.isLogged){
      return new Promise((resolve,reject)=>{
        resolve(true);
      });
    }
    else{
      return new Promise((resolve,reject)=>{
        var token = this.getToken();
        if(token == "" || token == undefined){
          resolve(false);
        }
        else{
          this.http.verifyUser(token).subscribe((data)=>{
            if(data.Status == 200){
              resolve(true);
            }
            else{
              resolve(false);
            }
          });
        }
      })
    }
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

   getToken = ()=>{
    return this.StorageClass.getValue('Token');
   }

   logout = ()=>{
      this.StorageClass.deleteValue("Token");
      this.isLogged = false;
   }



   
}
