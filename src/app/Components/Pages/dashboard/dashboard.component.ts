import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items!: MenuItem[];


  constructor(private jwt:JWTService,private router : Router) { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Info',
          icon:'pi pi-fw pi-file',
          routerLink:'/dashboard/userinfo'
          
      },
      {
          label:'Tags',
          icon:'pi pi-fw pi-pencil',
      },
      {
          label:'Skill Tags',
          icon:'pi pi-fw pi-user',
      },
      {
          label:'Social Icons',
          icon:'pi pi-fw pi-calendar',
      },
      {
        label:"Extras",
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Education',
            icon:'pi pi-fw pi-calendar',
        },
        {
          label:'Experience',
          icon:'pi pi-fw pi-calendar',
      },
      {
        label:'Timeline',
        icon:'pi pi-fw pi-calendar',
    },
        ]
      },
     
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
      }
  ];
    if(this.jwt.isLogged){
        
    }
    else{
      this.router.navigate(['/%%no-user%%']);
    }
  }

}
