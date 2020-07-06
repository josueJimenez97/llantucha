import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploadModule } from 'ng2-imageupload';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ObraGruesaComponent } from './pages/obra-gruesa/obra-gruesa.component';
import { AppRoutingModule } from './app-routing.module';
import { ObraFinaComponent } from './pages/obra-fina/obra-fina.component';
import { ProductosDestacadosComponent } from './componentes/productos-destacados/productos-destacados.component';
import { FormsModule } from '@angular/forms';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { MaquinariaComponent } from './pages/maquinaria/maquinaria.component';
import { LoginComponent } from './pages/login/login.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosObraGruesaComponent } from './componentes/productos-obra-gruesa/productos-obra-gruesa.component';
import { ProductosPorTipoComponent } from './componentes/productos-por-tipo/productos-por-tipo.component';
import { AgregarProductosComponent } from './componentes/agregar-productos/agregar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ObraGruesaComponent,
    ObraFinaComponent,
    ProductosDestacadosComponent,
    HerramientasComponent,
    MaquinariaComponent,
    LoginComponent,
    CarritoComponent,
    ProductosObraGruesaComponent,
    ProductosPorTipoComponent,
    AgregarProductosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    ImageUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
