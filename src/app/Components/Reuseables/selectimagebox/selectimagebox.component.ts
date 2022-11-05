import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageboxService } from 'src/app/Service/FilesHandler/imagebox.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-selectimagebox',
  templateUrl: './selectimagebox.component.html',
  styleUrls: ['./selectimagebox.component.css']
})
export class SelectimageboxComponent implements OnInit {
  @Input() displayMaximizable:boolean = false;
  @Input() Multiple:boolean = false;
  @Output() onSelection = new EventEmitter<string>();
  @Output() Close = new EventEmitter<boolean>();
  files:any = [];
  constructor(private imghandler:ImageboxService) {

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

  

  onClose(){
    this.displayMaximizable=false;
    this.Close.emit(false);
  }


  selectFile = ()=>{
    this.displayMaximizable=false;
    var selectedImg = this.files.filter((element:any)=>{
      return element.isSelected;
    });
    if(selectedImg.length > 0){
      if(this.Multiple){
        this.onSelection.emit(selectedImg);
      }
      else{
        this.onSelection.emit(selectedImg[0]);
      }
    }
  }

  selectThis = (img:any)=>{
    if(img.isSelected){
      img.isSelected = false;
    }
    else{
      if(!this.Multiple){
        this.files.forEach((element: any) => {
          element.isSelected = false;
          return element
        });
      }
      img.isSelected = true;
    }
  }


  isSelectedCheck = ()=>{
    return this.files.some((ele:any)=>{
      return ele.isSelected;
    })
  }

}
