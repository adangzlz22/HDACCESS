import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCuotasPageRoutingModule } from './editar-cuotas-routing.module';

import { EditarCuotasPage } from './editar-cuotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCuotasPageRoutingModule
  ],
  declarations: [EditarCuotasPage]
})
export class EditarCuotasPageModule {}
