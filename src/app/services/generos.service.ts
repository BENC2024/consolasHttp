import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

   //baseURI3 = "https://benc2024.github.io/testJSON/generos.json"
   baseURI3 = "http://localhost:3000/listGeneros"

   constructor( private httpClient: HttpClient ) { }
  
   listadoGeneros():Observable<any>{
      return this.httpClient.get(this.baseURI3).pipe(
         catchError(
            e => {
               return throwError(e)
               console.log("El error es: ", e )
            } 
         )
      )
   }
}
