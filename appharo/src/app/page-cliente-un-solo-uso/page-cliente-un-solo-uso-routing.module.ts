import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClienteUnSoloUsoPage } from './page-cliente-un-solo-uso.page';

const routes: Routes = [
  {
    path: '',
    component: PageClienteUnSoloUsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClienteUnSoloUsoPageRoutingModule {}
