import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorResidenciasRegistroPage } from './page-administrador-residencias-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorResidenciasRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorResidenciasRegistroPageRoutingModule {}
