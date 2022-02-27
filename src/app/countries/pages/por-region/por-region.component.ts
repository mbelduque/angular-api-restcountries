import {Component} from '@angular/core';

import {PaisService} from '../../services/pais.service';
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  region: string = '';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.region = region;
    this.paises = [];
    this.paisService.buscarPaisesRegion(this.region).subscribe((paises) => {
      this.paises = paises;
    })
  }

}
