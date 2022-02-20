import {Component} from '@angular/core';

import {Pais} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  capital: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(capital: string): void {
    this.hayError = false;
    this.capital = capital;
    this.paisService.buscarCapital(this.capital).subscribe((paises) => {
      this.paises = paises;
    }, (() => {
      this.hayError = true;
      this.paises = [];
    }));
  }

}
