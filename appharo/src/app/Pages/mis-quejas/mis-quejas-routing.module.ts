import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisQuejasPage } from './mis-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: MisQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisQuejasPageRoutingModule {}
