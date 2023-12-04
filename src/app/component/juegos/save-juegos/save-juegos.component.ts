import { Component } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego';
import { GenerosService } from 'src/app/services/generos.service';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-save-juegos',
  templateUrl: './save-juegos.component.html',
  styleUrls: ['./save-juegos.component.scss']
})
export class SaveJuegosComponent {
   juego: any = 
   {
      nombre: "",
      descripcion: "",
      genero_id : null,
      fechaLanzamiento: ""
   }

   public listadoGenero: any[] = []

   constructor(private juegoService: JuegosService, private generoService: GenerosService){}

   async ngOnInit(){
      this.generoService.listadoGeneros().subscribe(
         dato => {
            this.listadoGenero = dato
         }
      )
   }

   guardarJuego(){
      //const juegoJSON = JSON.stringify(this.juego);
      this.juegoService.guardarJuego(this.juego).subscribe(data => {
         if (data) {
            alert("Creado exitosamente")
         }
         else {
            alert("No creado")
         }
      });
   }
}
