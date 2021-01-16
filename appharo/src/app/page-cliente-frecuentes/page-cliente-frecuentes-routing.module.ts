import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClienteFrecuentesPage } from './page-cliente-frecuentes.page';

const routes: Routes = [
  {
    path: '',
    component: PageClienteFrecuentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClienteFrecuentesPageRoutingModule {}
