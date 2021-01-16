import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClienteUnSoloUsoRegistroPage } from './page-cliente-un-solo-uso-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PageClienteUnSoloUsoRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClienteUnSoloUsoRegistroPageRoutingModule {}
