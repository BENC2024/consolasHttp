import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedComponentService } from 'src/app/services/shared-component.service';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.scss']
})
export class AdminlayoutComponent {
   
   mostrarComponente: String = 'listaConsolas';
   private subscription: Subscription;

   constructor(private sharedService: SharedComponentService) {
      this.subscription = this.sharedService.mostrarComponente$.subscribe(
         (componente: String) => {
            this.mostrarComponente = componente;
         }
      )
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
}


   /*
      function(componente: String){
         this.mostrarComponente = componente;
      }
   */
