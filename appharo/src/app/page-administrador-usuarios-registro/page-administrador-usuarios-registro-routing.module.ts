import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorUsuariosRegistroPage } from './page-administrador-usuarios-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorUsuariosRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorUsuariosRegistroPageRoutingModule {}
