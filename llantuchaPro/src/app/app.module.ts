import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// los componentesss
import {CommonModule} from '@angular/common';
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
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosObraGruesaComponent } from './componentes/productos-obra-gruesa/productos-obra-gruesa.component';
import { ProductosPorTipoComponent } from './componentes/productos-por-tipo/productos-por-tipo.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ItemesComponent } from './componentes/itemes/itemes.component';
import { UserComponent } from './pages/user/user.component';

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
    AgregarProductosComponent,
    InventarioComponent,
    ItemesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,CommonModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
