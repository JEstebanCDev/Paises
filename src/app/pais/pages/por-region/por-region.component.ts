import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';

  paises: Country[] = [];

  activarRegion(region: string) {
    if(region===this.regionActiva){return ;}
    this.regionActiva = region;
    this.paises=[];
    console.log(region);
    this.region
      .buscarRegion(this.regionActiva)
      .subscribe((paises) => (this.paises = paises));
  }

  getClase(region: string): string {
    return region == this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
  constructor(private region: PaisService) {}
}
