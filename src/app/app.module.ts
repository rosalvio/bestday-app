import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { TableroComponent } from './tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadradoComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
