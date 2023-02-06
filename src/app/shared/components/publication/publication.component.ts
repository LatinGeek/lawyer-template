
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';

import { filter } from 'rxjs/operators';
import { map } from 'rxjs';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {



  }

  faq: any[] = [
    {
      title: "¿Cuánto cuesta contratar a una firma de abogados?",
      response: "El costo de contratar a una firma de abogados puede variar dependiendo de su experiencia y reputación, el tamaño y complejidad del caso, y las tarifas de la firma."
    },
    {
      title: "¿Qué es un abogado litigante en una firma de abogados?",
      response: "Un abogado litigante es un abogado especializado en representar a sus clientes en juicios y otros procedimientos legales en una corte."
    },
    {
      title: "¿Cómo se puede establecer una relación con una firma de abogados?",
      response: "Se puede establecer una relación con una firma de abogados a través de una reunión inicial para discutir sus necesidades legales y cómo la firma puede ayudar, y continuar manteniendo una comunicación abierta y clara a lo largo de la relación."
    },
    {
      title: "¿Qué se debe considerar antes de contratar a una firma de abogados?",
      response: "Antes de contratar a una firma de abogados, es importante considerar su experiencia y reputación, su área de especialización, sus tarifas, referencias de clientes anteriores y cualquier otro factor relevante."
    }
  ];

  ngOnInit() { }

  ngOnDestroy() { }

}
