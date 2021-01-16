import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorRolesRegistroPage } from './page-administrador-roles-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorRolesRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorRolesRegistroPageRoutingModule {}
