import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { ObraGruesaComponent } from './pages/obra-gruesa/obra-gruesa.component';
import { ObraFinaComponent } from './pages/obra-fina/obra-fina.component';

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
      component: ObraGruesaComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}