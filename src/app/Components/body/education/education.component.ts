import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PrimeIcons} from 'primeng/api';
// import edu from "../../../../Data/education.json"
import { HttpService } from 'src/app/Service/Network/http.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations!:any[];

  constructor(private http:HttpService,private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    var user = this.route.snapshot.paramMap.get('id');
    if(user == ""){
      user = "bhavya0304";
    }
    this.http.getUserEducation(user).subscribe((Response)=>{
      if(Response.Status == 200){
        this.educations = Response.Data.Data;
        
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
