import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    //este codigo no es nada lindo ya que tiene un observable dentro de otro
    //asi que hay una forma de hacerlo mas corto
    /*
    this.activedRoute.params.subscribe(params => {
      console.log(params.id);
      this.paisService.getPaisPorAlpha(params.id).subscribe(pais=>{
        console.log(pais)
      })
    });*/

    this.activedRoute.params
      .pipe(
        switchMap((param) => this.paisService.getPaisPorAlpha(param.id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais));
  }
}
