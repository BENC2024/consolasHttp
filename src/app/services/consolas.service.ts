import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, catchError, firstValueFrom } from 'rxjs'
import { Consola } from '../interfaces/consola';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

   //Private httpClient = Inject(HttpClient)
   //baseURIList = "https://benc2024.github.io/testJSON/consolas.json"
   baseURIList = "http://localhost:3000/listConsolas"
   baseURIDetail = "http://localhost:3000/detailConsola"
   baseURISave = "http://localhost:3000/saveConsolas"
   baseURIDelete = "http://localhost:3000/deleteConsolas"

   constructor(private httpClient: HttpClient) { }

   listadoConsolas():Observable<any>{
      //Se hace la peticion HTTP de la URL
      return this.httpClient.get(this.baseURIList).pipe( catchError( e => { return throwError(e) } ) )
   }

   detatelleConsola(id: String){
      return firstValueFrom(this.httpClient.get<any>(this.baseURIDetail+"/"+id))
      
   }

   guardarConsola(consola: Consola):Observable<any>{
      return this.httpClient.post(this.baseURISave,consola).pipe(
         catchError(
            e => {
               console.log(e)
               return e
            }
         )
      )
   }
}
