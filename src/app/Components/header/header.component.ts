import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/Service/Network/http.service';
import { ActivatedRoute, Router } from '@angular/router';  
// import info from '../../../Data/info.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNavigationArrows = true;
  isloaded:boolean = false;
  showNavigationIndicators = true;
  user:String = "";
  showImg:any;
    info:any;
  verified = "/assets/Images/Icons/verify.png";
  constructor(config: NgbCarouselConfig,private http:HttpService,private route : ActivatedRoute, private router : Router) {

    this.showImg = false;
    var user = this.route.snapshot.paramMap.get('id');
    this.http.getUserInfo(user).subscribe((Response)=>{
    
      console.log(user);
      if(user != null && Response.Status == 404){
        this.router.navigate(['/%%no-user%%'])
      }
      if(Response.Status == 200){
        this.info = Response.Data.Data;
        if(this.info.ProfileCovers.length <= 1){
          this.showNavigationArrows = false;
        }
      }
      else{
        console.log(Response);
      }
      this.isloaded = true;
    })
  }

  ngOnInit(): void {
    
  }

}
