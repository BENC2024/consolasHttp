import { Component } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-juegos',
  templateUrl: './list-juegos.component.html',
  styleUrls: ['./list-juegos.component.scss']
})
export class ListJuegosComponent {

   constructor( private juegosServices: JuegosService, private router: Router){}

   public listadoJuego: any[] = []
   detalle: String = ""
   buscarNombre: String = ""

   async ngOnInit(){
      this.juegosServices.listadoJuegos().subscribe(
         dato => {
            this.listadoJuego = dato
         }
      )
   }

   detalleJuego(juegoId: string) {
      this.detalle = juegoId
      console.log(this.detalle)
      this.router.navigate(['/detalleJuego', this.detalle]);
   }
}
