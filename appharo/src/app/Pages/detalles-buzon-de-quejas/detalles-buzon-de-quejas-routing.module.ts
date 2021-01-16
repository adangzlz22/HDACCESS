import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesBuzonDeQuejasPage } from './detalles-buzon-de-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesBuzonDeQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesBuzonDeQuejasPageRoutingModule {}
