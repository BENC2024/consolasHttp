import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedComponentService {

   private mostrarComponenteSrc = new Subject<String>()
   constructor() { }

   mostrarComponente$ = this.mostrarComponenteSrc.asObservable();

   mostrarComponente(componente: String) {
      this.mostrarComponenteSrc.next(componente);
   }

}
