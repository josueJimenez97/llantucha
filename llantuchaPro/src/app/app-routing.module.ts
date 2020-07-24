import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { ObraGruesaComponent } from './pages/obra-gruesa/obra-gruesa.component';
import { ObraFinaComponent } from './pages/obra-fina/obra-fina.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { MaquinariaComponent } from './pages/maquinaria/maquinaria.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgregarProductosComponent } from './pages/agregar-productos/agregar-productos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ItemesComponent } from './componentes/itemes/itemes.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    children: [
      {
        path: 'inicio1',
        component: ObraGruesaComponent
      },
      {
        path: 'inicio2',
        component: ObraFinaComponent
      }
    ]
  },
  {
      path: 'obraGruesa',
      component: ObraGruesaComponent,
      children: [
        {
          path: 'itemes',
          component: ItemesComponent
        }]
  },
  
  {
    path: 'obraFina',
    component: ObraFinaComponent,
    children: [
      {
        path: 'itemes',
        component: ItemesComponent
      }]
  },
  {
    path: 'herramientas',
    component: HerramientasComponent,
    children: [
      {
        path: 'itemes',
        component: ItemesComponent
      }]
  },
  {
    path: 'maquinaria',
    component: MaquinariaComponent,
    children: [
      {
        path: 'itemes',
        component: ItemesComponent
      }]
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'agregarProductos',
    component: AgregarProductosComponent
  },
  
  {
    path: 'inventario',
    component: InventarioComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}