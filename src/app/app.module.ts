import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListConsolasComponent } from './component/consolas/list-consolas/list-consolas.component';
import { SaveConsolasComponent } from './component/consolas/save-consolas/save-consolas.component';
import { AdminlayoutComponent } from './component/adminlayout/adminlayout.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListGenerosComponent } from './component/generos/list-generos/list-generos.component';
import { DetailConsolaComponent } from './component/consolas/detail-consola/detail-consola.component';
import { UpdateConsolaComponent } from './component/consolas/update-consola/update-consola.component';
import { ListJuegosComponent } from './component/juegos/list-juegos/list-juegos.component';
import { SaveJuegosComponent } from './component/juegos/save-juegos/save-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListConsolasComponent,
    SaveConsolasComponent,
    AdminlayoutComponent,
    NavbarComponent,
    ListGenerosComponent,
    DetailConsolaComponent,
    UpdateConsolaComponent,
    ListJuegosComponent,
    SaveJuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
