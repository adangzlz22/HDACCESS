import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClienteFrecuentesRegistroPage } from './page-cliente-frecuentes-registro.page';

const routes: Routes = [
  {
    path: '',
    component: PageClienteFrecuentesRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClienteFrecuentesRegistroPageRoutingModule {}
