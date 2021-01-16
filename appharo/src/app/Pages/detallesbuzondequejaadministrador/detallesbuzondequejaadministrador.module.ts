import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesbuzondequejaadministradorPageRoutingModule } from './detallesbuzondequejaadministrador-routing.module';

import { DetallesbuzondequejaadministradorPage } from './detallesbuzondequejaadministrador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesbuzondequejaadministradorPageRoutingModule
  ],
  declarations: [DetallesbuzondequejaadministradorPage]
})
export class DetallesbuzondequejaadministradorPageModule {}
