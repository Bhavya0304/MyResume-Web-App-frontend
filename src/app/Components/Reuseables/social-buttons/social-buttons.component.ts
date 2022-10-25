import { Component, OnInit } from '@angular/core';
import social from '../../../../Data/social_buttons.json';
import { HttpService } from 'src/app/Service/Network/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent implements OnInit {
  socials:any;
  constructor(private http:HttpService,private route : ActivatedRoute, private router : Router) {
    
   }

  ngOnInit(): void {
    var user = this.route.snapshot.paramMap.get('id');
    this.http.getUserSocialButton(user).subscribe((Response)=>{
      if(Response.Status == 200){
        this.socials = Response.Data.Data;
      }
      else{
        console.log(Response.Error);
      }
    })
  }

}
