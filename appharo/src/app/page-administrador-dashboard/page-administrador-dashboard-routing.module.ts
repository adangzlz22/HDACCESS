import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAdministradorDashboardPage } from './page-administrador-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PageAdministradorDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageAdministradorDashboardPageRoutingModule {}
