import { Component } from '@angular/core';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-list-generos',
  templateUrl: './list-generos.component.html',
  styleUrls: ['./list-generos.component.scss']
})
export class ListGenerosComponent {
   
   constructor( private generosServices: GenerosService ){}

   public listadoGenero: any[] = []

   async ngOnInit(){
      this.generosServices.listadoGeneros().subscribe(
         dato => {
            this.listadoGenero = dato
         }
      )
   }

}
