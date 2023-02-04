import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartData from './../../../shared/data/dashboard/default';
declare var require: any
var Knob = require('knob')// browserify require

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  owlcarousel1 = [
    { img: "assets/images/slider/lawfirm1.png", id: "1"},
    { img: "assets/images/slider/lawfirm2.png", id: "2" },
  ];

  //Options
  owlcarousel13Options = {
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false, 
  
    responsive: {
      0: { items: 1 }, 400: { items: 1 }, 740: { items: 1 }, 960: { items: 1 }
    }
  };

  // Chart Data  
  public chart1 = chartData.chartBox1;
  public chart2 = chartData.chartBox2;
  public chart3 = chartData.chartBox3;
  public chart4 = chartData.chartProduction;
  public chart5 = chartData.chartCalculation;

}
