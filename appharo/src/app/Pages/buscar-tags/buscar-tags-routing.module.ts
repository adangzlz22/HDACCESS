import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscadorTAGSComponent } from './buscar-tags.page';

const routes: Routes = [
  {
    path: '',
    component: BuscadorTAGSComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarTAGSPageRoutingModule {}
