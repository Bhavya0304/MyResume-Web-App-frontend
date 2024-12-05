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
        
      }
      else{
        console.log(Response.Error);
      }
    })
  }

  convertToMonthYearFormat(dateString: string): string {
    // Parse the input date string (e.g., "2021-05")
    const date = new Date(dateString + "-01"); // Add day to ensure valid Date object
    
    // Format the date as "Month, YYYY"
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

}
