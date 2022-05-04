import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { CarruselComponent } from './layout/carrusel/carrusel.component';
import { CardComponent } from './acerca/card/card.component';
import { FormComponent } from './acerca/form/form.component';
import { CarruComponent } from './home/carru/carru.component';
import { CartasComponent } from './home/cartas/cartas.component';
import { ImagenesComponent } from './home/imagenes/imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AcercaComponent,
    CarruselComponent,
    CardComponent,
    FormComponent,
    CarruComponent,
    CartasComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
