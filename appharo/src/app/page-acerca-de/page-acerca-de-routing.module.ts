import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAcercaDePage } from './page-acerca-de.page';

const routes: Routes = [
  {
    path: '',
    component: PageAcercaDePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAcercaDePageRoutingModule {}
