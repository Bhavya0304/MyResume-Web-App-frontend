import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageboxService } from 'src/app/Service/FilesHandler/imagebox.service';
import {MessageService} from 'primeng/api';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-imagebox',
  templateUrl: './imagebox.component.html',
  styleUrls: ['./imagebox.component.css'],
  providers:[MessageService]
})
export class ImageboxComponent implements OnInit {
  @Input() displayMaximizable:boolean = false;
  @Output() Evente = new EventEmitter<boolean>();
  uploadedFiles: any[] = [];
  mutiple:boolean = true;
  files:any = [];
  constructor(private messageService: MessageService,private imghandler:ImageboxService) {
   }

  ngOnInit(): void {
   this.getImages();
  }
  getImages = ()=>{this.imghandler.getImages().then((data:any)=>{
    this.files = data.Data;
    this.files = this.files.map((file:any)=>{
      var file_split = file.split('/');
      var name:string = file_split[file_split.length-1];
      return {
        url:file,
        name:name,
        isSelected:false
      }
    });
    
  }).catch((err)=>{
    alert(err);
  })
}


  deleteFiles = ()=>{
    var ans = confirm("Are you sure you want to delete selected images!");
    if(!ans){
      return;
    }
    var files = this.files.filter((ele:any)=>{
      return ele.isSelected;
    }).map((ele:any)=>{
      return ele.name;
    })
    this.imghandler.deleteImages(files).then((data:any)=>{
      this.messageService.add({severity:'success', summary:'Deleted Sucessfully', detail:'All Selected Images are deleted!'});
      this.getImages();
    }).catch((err)=>{
      console.log(err);
    })
  }
  isSelectedCheck = ()=>{
    return this.files.some((ele:any)=>{
      return ele.isSelected;
    })
  }

  onClose(){
    this.displayMaximizable=false;
    this.Evente.emit(false);
  }


  myUploader(event:any,fileUpload:any) {
    this.uploadedFiles = [];
    const formData = new FormData();
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        formData.append('files',file,file.name);
    }
    this.imghandler.uploadImages(formData).then((data:any)=>{
      this.messageService.add({severity:'success', summary:'Uploaded Sucessfully', detail:'All Selected Images are uploaded!'});
      this.getImages();
      fileUpload.clear()
    }).catch((err)=>{
      console.log(err);
    })
    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

}
