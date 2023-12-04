import { Component } from '@angular/core';
import { Consola } from 'src/app/interfaces/consola';
import { ConsolasService } from 'src/app/services/consolas.service';

@Component({
  selector: 'app-save-consolas',
  templateUrl: './save-consolas.component.html',
  styleUrls: ['./save-consolas.component.scss']
})
export class SaveConsolasComponent {

   consola: Consola = 
   {
      nombre:"",
      fabricante:"",
      lanzamiento:"",
      almacenamiento:"",
      precio:0,
      enlace:""
   }

   constructor(private consolaService: ConsolasService){}

   guardarConsola(){
      this.consolaService.guardarConsola(this.consola).subscribe(data => {
         if (data) {
            alert("Creado exitosamente")
         }
         else {
            alert("No creado")
         }
      });
   }

}
