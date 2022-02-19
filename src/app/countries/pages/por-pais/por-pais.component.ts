import {Component} from '@angular/core';

import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe((paises) => {
      this.paises = paises;
      console.log(this.paises);
    }, (() => {
      this.hayError = true;
      this.paises = [];
    }));
  }

  sugerencias(event: string) {
    this.hayError = false;

  }
}
