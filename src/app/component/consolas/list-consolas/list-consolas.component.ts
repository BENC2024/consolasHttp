import { Component, Inject } from '@angular/core';
import { ConsolasService } from 'src/app/services/consolas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-consolas',
  templateUrl: './list-consolas.component.html',
  styleUrls: ['./list-consolas.component.scss']
})
export class ListConsolasComponent {

   //private consolaServicio = Inject(ConsolasService) Utilizando signal
   constructor(private consolaServicio: ConsolasService, private router: Router){}

   //listaConsolas = {}
   public listaConsolas: any[] = [] //REcibe los datos del tipo objeto
   buscarNombre: String = "";
   detalle: String = ""

   async ngOnInit(){ //Inicio asincrono
      this.consolaServicio.listadoConsolas().subscribe(
         lista => {
            this.listaConsolas = lista
         }
      )
   }

   // Suponiendo que consolas es la lista de consolas en tu componente de lista
   detalleConsola(consolaId: string) {
      this.detalle = consolaId
      console.log(this.detalle)
      this.router.navigate(['/detalleConsola', this.detalle]);
   }


}
