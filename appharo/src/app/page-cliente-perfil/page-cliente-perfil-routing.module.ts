import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClientePerfilPage } from './page-cliente-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PageClientePerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClientePerfilPageRoutingModule {}
