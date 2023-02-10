import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import * as chartData from './../../../../shared/data/dashboard/default';
declare var require: any
var Knob = require('knob')// browserify require

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#4466f2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [
      transition('void => active', [ // using status here for transition
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.onResize(null);
  }

  carouselLandscape = [
    { img: "assets/images/slider/lawfirm1.png", id: "1" },
    { img: "assets/images/slider/lawfirm2.png", id: "2" },
  ];

  carouselRecommendations = [
    {
      img: "assets/images/slider/lawfirm2.png",
      id: "a3",
      description: '"La empresa tiene una visión empresarial, abierta y creativa, que les permite entender y adaptarse a las variables de un caso, proponiendo soluciones adecuadas a cada asunto."',
      author: "(Chambers and Partners; 2022)"
    },
    {
      img: "assets/images/slider/lawfirm2.png",
      id: "a4",
      description: '"La firma cuenta con un equipo de profesionales altamente preparados que entienden la dinámica de nuestra empresa, lo que les permite tener una buena visión de los asuntos a tratar."',
      author: "(Lucas García; 2023)"

    },
  ];

  carouselPortrait = [
    { img: "assets/images/slider/lawfirm1_square.png", id: "3" },
    { img: "assets/images/slider/lawfirm2_square.png", id: "4" },
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

  owlcarousel135Options = {
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    responsive: {
      0: { items: 1 }, 400: { items: 1 }, 740: { items: 2 }, 960: { items: 2 }
    }
  };

  // Chart Data  
  public chart1 = chartData.chartBox1;
  public chart2 = chartData.chartBox2;
  public chart3 = chartData.chartBox3;
  public chart4 = chartData.chartProduction;
  public chart5 = chartData.chartCalculation;

  windowWidth: number;
  windowHeight: number;
  landscapeDisplay: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    this.windowHeight = event.target.innerHeight;

    if (this.windowWidth <= 1000) {
      this.landscapeDisplay = false;
    }else{
      this.landscapeDisplay = true;
    }
  }

  getOwlCarousel(){
    return this.landscapeDisplay ? this.carouselLandscape : this.carouselPortrait;
  }

}
