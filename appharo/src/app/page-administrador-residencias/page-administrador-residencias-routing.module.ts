import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorResidenciasPage } from './page-administrador-residencias.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorResidenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorResidenciasPageRoutingModule {}
