import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClienteDashboardPage } from './page-cliente-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PageClienteDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageClienteDashboardPageRoutingModule {}
