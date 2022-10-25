import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PrimeIcons} from 'primeng/api';
import { HttpService } from 'src/app/Service/Network/http.service';
import exp from "../../../../Data/expirence.json"

@Component({
  selector: 'app-expereince',
  templateUrl: './expereince.component.html',
  styleUrls: ['./expereince.component.css']
})
export class ExpereinceComponent implements OnInit {

  expirence!:any[];

  constructor(private http:HttpService,private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    var user = this.route.snapshot.paramMap.get('id');
    this.http.getUserExperience(user).subscribe((Response)=>{
      if(Response.Status == 200){
        this.expirence = Response.Data.Data;
        this.expirence.sort((a,b)=>{
          if(parseInt(a.Year_from) < parseInt(b.Year_from)){
            return 1;
          }
          else{
            return -1;
          }
        })
      }
      else{
        console.log(Response.Error);
      }
    })
  }

}
