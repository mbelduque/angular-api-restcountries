import {Component, Input, OnInit} from '@angular/core';

import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() paises: Pais[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
