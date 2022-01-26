import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
image="assets/img/image.jpg"
  constructor() { }

  ngOnInit(): void {
  }
 
  getBackgroundImageUrl() { 
    return `url(${this.image})` 
  } 


}
