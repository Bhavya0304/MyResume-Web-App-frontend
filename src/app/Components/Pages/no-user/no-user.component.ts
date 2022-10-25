import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-user',
  templateUrl: './no-user.component.html',
  styleUrls: ['./no-user.component.css']
})
export class NoUserComponent implements OnInit {
  redirectToTerminal:any;
  redirectToHomePage:any;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.redirectToTerminal = ()=>{
      this.router.navigate(['/terminal'])
    }
    this.redirectToHomePage = ()=>{
      this.router.navigate([''])
    }
  }

}
