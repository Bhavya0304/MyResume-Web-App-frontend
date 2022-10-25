import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveTo = (key:string,value:string)=>{
    localStorage.setItem(key,value);
  }

  getValue = (Key:string)=>{
    return localStorage.getItem(Key);
  }

  deleteValue = (Key:string)=>{
    localStorage.removeItem(Key);
  }
}
