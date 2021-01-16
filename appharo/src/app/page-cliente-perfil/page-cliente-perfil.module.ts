import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageClientePerfilPageRoutingModule } from './page-cliente-perfil-routing.module';

import { PageClientePerfilPage } from './page-cliente-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClientePerfilPageRoutingModule
  ],
  declarations: [PageClientePerfilPage]
})
export class PageClientePerfilPageModule {}
