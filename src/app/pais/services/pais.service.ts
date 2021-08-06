import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl:string ='https://restcountries.eu/rest/v2';

  constructor(private http:HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');
  }

  buscarPais(termino:string) :Observable<Country[]>{
    const url = `${this._apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
    /*otra forma de recibir algo y controlar los errores es con
    importando
    import { Observable, of } from 'rxjs';
    import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';
    return this.http.get(url).pipe(
      catchError(err=>of([]))
    );*/
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${termino}`;

    console.log(url);
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url =`${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }


}
