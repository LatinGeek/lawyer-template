import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation, ElementRef, HostListener, HostBinding } from '@angular/core';
import * as chartData from './../../../../shared/data/dashboard/default';
declare var require: any
var Knob = require('knob')// browserify require

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#4466f2';

interface Post {
  bannerUrl: string;
  author: string;
  clicks: number;
  title: string;
  description: string;
  id: string;
  date: number;
}

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

  @HostBinding('window.innerWidth') innerWidth: number;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.innerWidth = window.innerWidth;
    this.onResize({ target: { innerWidth: this.innerWidth } });

  }

  posts: Post[] = [
    {
      title: "La importancia del Estate Planning",
      author: "John Smith",
      description: "Estate planning is a critical aspect of financial planning that everyone should consider. In this post, we'll explore why estate planning is so important and what steps you can take to ensure your assets are managed properly after your death.",
      date: 1609459200,
      clicks: 500,
      id: "1",
      bannerUrl: "/assets/images/latest-posts/latest-posts-1.jpeg"
    },
    {
      title: "Cuál es el poder de un Abogado?",
      author: "Mary Garcia",
      description: "A power of attorney is a legal document that gives another person the authority to make decisions on your behalf. In this post, we'll explore what a power of attorney is, why it's important, and what you should know.",
      date: 1609545680,
      clicks: 200,
      id: "2",
      bannerUrl: "assets/images/latest-posts/latest-posts-2.jpeg"
    },
    {
      title: "Los básicos de Contract Law",
      author: "David Brown",
      description: "Contract law is a complex and important area of law that governs the formation and enforcement of contracts. In this post, we'll explore the basics of contract law and what you need to know to protect your rights and interests.",
      date: 1609632000,
      clicks: 300,
      id: "3",
      bannerUrl: "assets/images/latest-posts/latest-posts-3.webp"
    },
    {
      title: "Entendiendo la Litigación Civil",
      author: "Jane Doe",
      description: "Civil litigation is the process of resolving disputes through the court system. In this post, we'll explore what civil litigation is, why it's important, and what you should know if you find yourself involved in a civil lawsuit.",
      date: 1609718400,
      clicks: 100,
      id: "4",
      bannerUrl: "assets/images/latest-posts/latest-posts-4.jpeg"
    },

  ];

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

    if (this.windowWidth <= 1080) {
      this.landscapeDisplay = false;
    }else{
      this.landscapeDisplay = true;
    }

    console.log(this.landscapeDisplay);
  }

  getOwlCarousel(){
    return this.landscapeDisplay ? this.carouselLandscape : this.carouselPortrait;
  }

}
