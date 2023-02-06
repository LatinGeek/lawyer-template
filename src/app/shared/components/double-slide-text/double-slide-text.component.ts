
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-double-slide-text',
  templateUrl: './double-slide-text.component.html',
  styleUrls: ['./double-slide-text.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // the "in" style determines the "resting" state of the element when it is visible.
      state('out', style({opacity: 0})),

      // fade in when created. this could also be written as transition('void => *')
      transition('out => in', [
        style({opacity: 0}),
        animate(300 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition('in => out',
        animate(300, style({opacity: 0})))
    ])
  ]
})
export class DoubleSlideTextComponent implements OnInit {


  constructor(private el: ElementRef) {
  }

  transition = 'in';

  selectedTextBoxInfo= 'li1';

  textBoxInfo = [
    {
      id: "li1",
      title: "Inversiones",
      description: `Asesoramos en fusiones y adquisiciones (M&A), intermediando en negocios de compraventa de acciones,
      joint ventures y fusiones y escisiones empresariales, cubriendo las diferentes etapas jurídicas (auditorías y
      procesos de due diligence, financiación, contratos involucrados, etc.).`
  },
  {
    id: "li2",
    title: "Legal",
    description: `Prestamos servicios en todas las áreas del Derecho Laboral: relaciones individuales 
    (relación empleador-trabajadores), relaciones colectivas (Derecho Sindical: relación empresa-sindicatos), 
    seguridad y salud (gestión y prevención de la SYSO) y seguridad social (Derecho Tributario Previsional).`
  },
  {
    id: "li3",
    title: "Notarial",
    description: `Brindamos servicios notariales para la adquisición, enajenación y administración de toda clase de bienes
    muebles e inmuebles (compraventas, arrendamientos, leasings y otros).`
  },
  {
    id: "li4",
    title: "Startup",
    description: `Asistimos a emprendedores y trabajamos con startups en los desafíos legales vinculados a las
    primeras etapas del desarrollo de sus proyectos.`
  },
];

  setServiceInfo(id) {
    this.transition = 'out';

    let myTag = this.el.nativeElement.getElementsByClassName(`serviceInfo`);
    for (const box of myTag) {
      box.classList.remove('active');
    }

    this.selectedTextBoxInfo = id;

  }

  	// I get called when an animation has completed. Completion may be caused by an
	// animation reaching its end-state; or, it may be called because the state changed
	// in the middle of an active transition.
	public handleDone( event: any ) : void {
    if(event.toState == 'out'){
      this.updateInfoText(this.selectedTextBoxInfo);

      this.transition = 'in';
    }

	}

  updateInfoText(id: String) {
    let myTag2 = this.el.nativeElement.querySelector("#" + id);
    myTag2.classList.add('active');

    let selectedItem = this.textBoxInfo.filter(item => item.id == id);

    let myTag3 = this.el.nativeElement.querySelector("#textBoxInfo");
    myTag3.innerHTML=selectedItem[0].description;

    let myTag4 = this.el.nativeElement.querySelector("#textBoxTitle");
    myTag4.innerHTML=selectedItem[0].title;
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
