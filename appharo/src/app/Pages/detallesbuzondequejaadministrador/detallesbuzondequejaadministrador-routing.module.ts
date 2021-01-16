import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesbuzondequejaadministradorPage } from './detallesbuzondequejaadministrador.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesbuzondequejaadministradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesbuzondequejaadministradorPageRoutingModule {}
