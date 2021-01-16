import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorUsuariosPage } from './page-administrador-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorUsuariosPageRoutingModule {}
