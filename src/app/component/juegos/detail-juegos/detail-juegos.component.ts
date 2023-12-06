import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-detail-juegos',
  templateUrl: './detail-juegos.component.html',
  styleUrls: ['./detail-juegos.component.scss']
})
export class DetailJuegosComponent {

   constructor(private juegoServicio: JuegosService, private activatedRoute: ActivatedRoute,
      private router: Router){}

   detalleJuego: any = {}
   actualizar: String = ""

   async ngOnInit(){ //Inicio asincrono
      this.activatedRoute.params.subscribe(async params => {
         console.log(params['id'])
         this.detalleJuego = await this.juegoServicio.detalleJuego(params['id'])
      })
      console.log(this.detalleJuego)
   }

   actualizarJuego(juegoId: string) {
      this.actualizar = juegoId
      console.log(this.actualizar)
      this.router.navigate(['/actualizarJuego', this.actualizar]);
  }

  eliminarJuego(juegoId: string) {
    console.log(juegoId)
    this.juegoServicio.eliminarJuego(juegoId).subscribe(data => {
      if (data) {
         alert("Borrado exitosamente")
      }
      else {
         alert("No delete")
      }
    });
  }

}
