import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorPermisosPage } from './page-administrador-permisos.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorPermisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorPermisosPageRoutingModule {}
