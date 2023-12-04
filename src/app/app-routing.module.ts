import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConsolasComponent } from './component/consolas/list-consolas/list-consolas.component';
import { SaveConsolasComponent } from './component/consolas/save-consolas/save-consolas.component';
import { DetailConsolaComponent } from './component/consolas/detail-consola/detail-consola.component';
import { AdminlayoutComponent } from './component/adminlayout/adminlayout.component';
import { AppComponent } from './app.component';
import { SaveJuegosComponent } from './component/juegos/save-juegos/save-juegos.component';

const routes: Routes = [
   {path:"listadoConsolas", component:ListConsolasComponent},
   {path:"detalleConsola/:id", component:DetailConsolaComponent}, //tener encuenta esta estructura
   {path:"guardarConsolas", component:SaveConsolasComponent},
   {path:"guardarJuegos", component:SaveJuegosComponent},
   {path:"", component:AdminlayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
