import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneradorCodigosPage } from './generador-codigos.page';

const routes: Routes = [
  {
    path: '',
    component: GeneradorCodigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneradorCodigosPageRoutingModule {}
