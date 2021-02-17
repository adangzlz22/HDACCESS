import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCuotasPage } from './editar-cuotas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCuotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCuotasPageRoutingModule {}
