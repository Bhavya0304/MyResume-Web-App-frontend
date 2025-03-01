import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  items!: MenuItem[];


  constructor(private jwt:JWTService,private router : Router) { 
   
  }

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
          routerLink:'/dashboard/usertags'
      },
      {
          label:'Skill Tags',
          icon:'pi pi-fw pi-user',
          routerLink:'/dashboard/skilltags'
      },
      {
          label:'Social Icons',
          icon:'pi pi-fw pi-calendar',
          routerLink:'/dashboard/socialbuttons'
      },
      {
        label:'Upload Resume',
        icon:'pi pi-fw pi-calendar',
        routerLink:'/dashboard/uploadresume'
      },
      {
        label:"Extras",
        icon:'pi pi-fw pi-calendar',
        items:[
          {
            label:'Education',
            icon:'pi pi-fw pi-calendar',
          routerLink:'/dashboard/usereducations'
        },
        {
          label:'Experience',
          icon:'pi pi-fw pi-calendar',
          routerLink:'/dashboard/userexperience'
      },
      {
        label:'Timeline',
        icon:'pi pi-fw pi-calendar',
        routerLink:'/dashboard/usertimeline'
    },
        ]
      },
     
      {
          label:'Image Box',
          icon:'pi pi-fw pi-image',
          routerLink:'/dashboard/handlefiles'
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off',
        routerLink:'/terminal'
    }
  ];

  this.jwt.verifyUser().then((res)=>{
    if(!res){
      this.jwt.logout();
      this.router.navigate(['/%%no-user%%']);
    }
  })

  }

}
