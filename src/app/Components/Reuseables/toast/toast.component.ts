import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/Service/Notifications/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers:[MessageService]
})
export class ToastComponent implements OnInit {

  constructor(private messageService: MessageService,private toast:ToastService) { }

  ngOnInit(): void {
    this.toast.toastObs.subscribe((obj:any)=>{
      console.log("also here");
     // {severity:'success', summary:'Deleted Sucessfully', detail:'All Selected Images are deleted!'}
      this.messageService.add(obj);
    });
  }

}
