import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";

import {PorCapitalComponent} from './pages/por-capital/por-capital.component';
import {PorPaisComponent} from './pages/por-pais/por-pais.component';
import {PorRegionComponent} from './pages/por-region/por-region.component';
import {VerPaisComponent} from './pages/ver-pais/ver-pais.component';
import {TablaPaisesComponent} from './components/tabla-paises/tabla-paises.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';


@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    TablaPaisesComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisesModule {
}
