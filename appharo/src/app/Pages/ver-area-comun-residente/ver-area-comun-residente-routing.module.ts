import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAreaComunResidentePage } from './ver-area-comun-residente.page';

const routes: Routes = [
  {
    path: '',
    component: VerAreaComunResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAreaComunResidentePageRoutingModule {}
