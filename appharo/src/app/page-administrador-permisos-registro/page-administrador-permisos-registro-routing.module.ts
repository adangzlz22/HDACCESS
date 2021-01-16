import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorPermisosRegistroPage } from './page-administrador-permisos-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorPermisosRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorPermisosRegistroPageRoutingModule {}
