import { Component, HostListener, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import moment from 'moment';
import { HttpService } from 'src/app/Service/Network/http.service';
import { offset } from '@popperjs/core';
import { ScriptService } from 'src/app/Service/Scripts/script.service';
import {combo} from '../../../Themes/ColorCombinationsBtns';
// import { iframely } from "@iframely/embed.js";

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})


export class AchievementsComponent implements OnInit{
  combo = combo;
  Offset:number;
  Length:number;
  end:boolean;
  event!:any[];
  onScrolls:any;
  dataobj:any;
  
@HostListener('window:scroll', ['$event'])
scrollHandler(events:any) {
  if(this.end){
    return;
  }
  let pos:any = (document.documentElement.offsetHeight - (document.documentElement.scrollTop || document.body.scrollTop));
  let max:any = document.documentElement.clientHeight;

  
//  if( parseInt(pos) == parseInt(max))   {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
  this.Offset = this.Offset +1;
  this.http.getUserTimeline({
    offset:this.Offset,
    length:this.Length
  }).subscribe((Response)=>{
    if(Response.Status == 200){
      if(Response.Data.Data.length < 1){
        this.end = true;
        return;
            }
      this.event = [ ...this.event, ...Response.Data.Data]; 
    }
    else{
      console.log(Response.Error);
    }
  });
 }
}


  constructor(private http:HttpService,private scriptService: ScriptService) { 
    this.Offset = 1;
    this.Length = 5;
    this.end = false;
   
  }

  ngOnInit(): void {
   
    this.http.getUserTimeline({
      offset:this.Offset,
      length:this.Length
    }).subscribe((Response)=>{
      if(Response.Status == 200){
        console.log(Response);
        this.event = Response.Data.Data; 
        this.scriptService.load('Embed');
        // this.event[0].Html = '<div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 50%; padding-top: 120px;"><a href="https://github.com/firefox-devtools/profiler/pull/4099" data-iframely-url="//cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fgithub.com%2Ffirefox-devtools%2Fprofiler%2Fpull%2F4099&key=e0152cab56f199cb9055033f5942649e"></a></div></div>';
      }
      else{
        console.log(Response.Error);
      }
    });

  }
}
