import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenerosService } from 'src/app/services/generos.service';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-update-juegos',
  templateUrl: './update-juegos.component.html',
  styleUrls: ['./update-juegos.component.scss']
})
export class UpdateJuegosComponent {
   
   constructor(private juegoServicio: JuegosService, private activatedRoute: ActivatedRoute,
      private generoService: GenerosService){}

   descripcionJuego: any = {}
   public listadoGenero: any[] = []
   
   async ngOnInit(){ //Inicio asincrono
      this.generoService.listadoGeneros().subscribe(
         dato => {
            this.listadoGenero = dato
         }
      )
      this.activatedRoute.params.subscribe(async params => {
         console.log(params['id'])
         this.descripcionJuego = await this.juegoServicio.detalleJuego(params['id'])
      })
   }

   
   actualizarJuego(){
      this.juegoServicio.actualizarJuego(this.descripcionJuego).subscribe(data => {
         if (data) {
            alert("update exitosamente")
         }
         else {
            alert("No update")
         }
      });
   }

}
