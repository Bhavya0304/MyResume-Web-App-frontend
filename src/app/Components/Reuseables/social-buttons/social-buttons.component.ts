import { Component, OnInit } from '@angular/core';
import social from '../../../../Data/social_buttons.json';
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent implements OnInit {
  socials:any;
  constructor(private http:HttpService) {
    
   }

  ngOnInit(): void {
    this.http.getUserSocialButton().subscribe((Response)=>{
      if(Response.Status == 200){
        this.socials = Response.Data.Data;
      }
      else{
        console.log(Response.Error);
      }
    })
  }

}
