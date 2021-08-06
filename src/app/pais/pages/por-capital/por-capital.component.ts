import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino :string='';
  paises:Country[]=[];

  hayError:boolean=false;


  buscar(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.capitalService.buscarCapital(termino).subscribe((paises)=>{
      console.log(paises)
      this.paises=paises;
    },
    (err)=>{
      this.hayError=true;
      this.paises=[];
    })
  }

  sugerencias($termino:string){
    this.hayError=false;
    //Crear sugerencias
  }
  constructor(private capitalService:PaisService){}
}
