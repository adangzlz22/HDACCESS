import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAreaComunPage } from './ver-area-comun.page';

const routes: Routes = [
  {
    path: '',
    component: VerAreaComunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAreaComunPageRoutingModule {}
