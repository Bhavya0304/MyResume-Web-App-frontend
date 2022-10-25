import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private jwt:JWTService,private router : Router) { }

  ngOnInit(): void {
    if(this.jwt.isLogged){

    }
    else{
      this.router.navigate(['/%%no-user%%']);
    }
  }

}
