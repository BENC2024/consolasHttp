import { Component } from '@angular/core';
import { ConsolasService } from 'src/app/services/consolas.service';
import { ActivatedRoute } from '@angular/router'
import { Consola } from 'src/app/interfaces/consola';

@Component({
  selector: 'app-detail-consola',
  templateUrl: './detail-consola.component.html',
  styleUrls: ['./detail-consola.component.scss']
})
export class DetailConsolaComponent {

   constructor(private consolaServicio: ConsolasService, private activatedRoute: ActivatedRoute){}

   detalleConsola: any = {}
   
   async ngOnInit(){ //Inicio asincrono
      this.activatedRoute.params.subscribe(async params => {
         console.log(params['id'])
         this.detalleConsola = await this.consolaServicio.detatelleConsola(params['id'])
      })
      console.log(this.detalleConsola)
   }

}
