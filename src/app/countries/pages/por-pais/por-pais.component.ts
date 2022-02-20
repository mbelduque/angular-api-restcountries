import {Component} from '@angular/core';

import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  pais: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(pais: string): void {
    this.hayError = false;
    this.pais = pais;
    this.paisService.buscarPais(this.pais).subscribe((paises) => {
      this.paises = paises;
    }, (() => {
      this.hayError = true;
      this.paises = [];
    }));
  }

  sugerencias(event: string) {
    this.hayError = false;
  }

}
