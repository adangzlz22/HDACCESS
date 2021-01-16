import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzonDeQuejasPage } from './buzon-de-quejas.page';

const routes: Routes = [
  {
    path: '',
    component: BuzonDeQuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzonDeQuejasPageRoutingModule {}
