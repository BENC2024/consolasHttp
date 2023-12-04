import { Component } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-list-juegos',
  templateUrl: './list-juegos.component.html',
  styleUrls: ['./list-juegos.component.scss']
})
export class ListJuegosComponent {

   constructor( private juegosServices: JuegosService ){}

   public listadoJuego: any[] = []

   buscarNombre: String = ""

   async ngOnInit(){
      this.juegosServices.listadoJuegos().subscribe(
         dato => {
            this.listadoJuego = dato
         }
      )
   }
}
