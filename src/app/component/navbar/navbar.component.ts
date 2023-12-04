import { Component } from '@angular/core';
import { SharedComponentService } from 'src/app/services/shared-component.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   constructor(private sharedComponet: SharedComponentService){}

   mostrarComponente(componente: String){
      this.sharedComponet.mostrarComponente(componente)
   }
}
