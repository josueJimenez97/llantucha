import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ObraGruesaComponent } from './pages/obra-gruesa/obra-gruesa.component';
import { AppRoutingModule } from './app-routing.module';
import { ObraFinaComponent } from './pages/obra-fina/obra-fina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ObraGruesaComponent,
    ObraFinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
