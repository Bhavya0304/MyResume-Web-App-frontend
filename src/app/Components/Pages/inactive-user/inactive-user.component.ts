import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
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
