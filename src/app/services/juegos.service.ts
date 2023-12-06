import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { Juego } from '../interfaces/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

   //baseURIList = "https://benc2024.github.io/testJSON/juegos.json"
   baseURIList = "http://localhost:3000/listJuegos"
   baseURISave = "http://localhost:3000/saveJuego"
   baseURIDetail = "http://localhost:3000/detailJuego"
   baseURIDelete = "http://localhost:3000/deleteJuego"
   baseURIUpdate = "http://localhost:3000/updateJuego"

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

   detalleJuego(id: String){
      return firstValueFrom(this.httpClient.get(this.baseURIDetail+"/"+id))
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

   actualizarJuego(upjuego: Juego, id: String):Observable<any>{
      return this.httpClient.put(this.baseURIUpdate+"/"+id,upjuego).pipe(
         catchError(
            e => {
               console.log(e)
               return e
            }
         )
      )
   }

}
