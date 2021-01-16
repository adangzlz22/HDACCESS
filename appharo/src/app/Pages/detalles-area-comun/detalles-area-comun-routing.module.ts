import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesAreaComunPage } from './detalles-area-comun.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesAreaComunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesAreaComunPageRoutingModule {}
