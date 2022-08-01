import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecharts',
  templateUrl: './lifecharts.component.html',
  styleUrls: ['./lifecharts.component.css']
})
export class LifechartsComponent implements OnInit {
  data: any;

  chartOptions: any;

 
 
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['HTML5/CSS3','JavaScript','C/C++','Java','Python'],
      datasets: [
          {
              data: [15, 25,30,10,20 ],
              backgroundColor: [
                  "#6495ED",
                  "#FFFF00",
                  "#1E90FF",
                  "#DC143C",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#6495ED",
                  "#FFFF00",
                  "#1E90FF",
                  "#DC143C",
                  "#FFA726"
              ]
          }
      ]
  };
  }

}
