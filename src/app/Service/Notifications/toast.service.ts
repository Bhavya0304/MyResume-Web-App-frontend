import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public messageObj = {};
  public toast = new BehaviorSubject<any>({});
  public toastObs = this.toast.asObservable();

  addToast = (obj:any)=>{
    console.log("here i am");
    this.toast.next(obj);
  }
}
