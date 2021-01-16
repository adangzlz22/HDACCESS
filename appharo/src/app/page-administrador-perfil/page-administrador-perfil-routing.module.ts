import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorPerfilPage } from './page-administrador-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorPerfilPageRoutingModule {}
