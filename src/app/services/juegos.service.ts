import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Juego } from '../interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

   //baseURIList = "https://benc2024.github.io/testJSON/juegos.json"
   baseURIList = "http://localhost:3000/listJuegos"
   baseURISave = "http://localhost:3000/saveJuego"
   baseURIDelete = "http://localhost:3000/deleteJuego"

   constructor( private httpClient: HttpClient ) { }

   listadoJuegos():Observable<any>{
      return this.httpClient.get(this.baseURIList).pipe(
         catchError(
            e => {
               return throwError(e)
               console.log("El error es: ", e )
            } 
         )
      )
   }

   guardarJuego(juego: Juego):Observable<any>{
      return this.httpClient.post(this.baseURISave,juego).pipe(
         catchError(
            e => {
               console.log(e)
               return e
            }
         )
      )
   }

}
