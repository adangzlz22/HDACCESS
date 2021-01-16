import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorGeneradorCodigoPage } from './page-administrador-generador-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorGeneradorCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorGeneradorCodigoPageRoutingModule {}
