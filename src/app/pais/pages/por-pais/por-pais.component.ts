import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
    cursor:pointer;
  }`],
})
export class PorPaisComponent {
  termino: string = '';
  paises:Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;

  hayError:boolean=false;


  buscar(termino:string) {
    this.hayError=false;
    this.termino=termino;
    this.paisService.buscarPais(termino).subscribe((paises) => {
      console.log(paises)
      this.paises=paises;

    },
    (err)=>{
      this.hayError=true;
      this.paises=[];
    });
  }

  sugerencias( termino:string){
    this.hayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    //Crear sugerencias

    this.paisService.buscarPais(termino)
    .subscribe(paises=>this.paisesSugeridos=paises.splice(0,5),
    (err)=>this.paisesSugeridos=[]);
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

  constructor(private paisService: PaisService) {}
}
