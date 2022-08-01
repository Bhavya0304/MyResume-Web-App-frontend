import { Component, OnInit } from '@angular/core';
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

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getUserEducation().subscribe((Response)=>{
      if(Response.Status == 200){
        this.educations = Response.Data.Data;
      }
      else{
        console.log(Response.Error);
      }
    })
    
  }

}
