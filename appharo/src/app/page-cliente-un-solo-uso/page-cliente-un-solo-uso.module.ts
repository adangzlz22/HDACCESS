import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageClienteUnSoloUsoPageRoutingModule } from './page-cliente-un-solo-uso-routing.module';

import { PageClienteUnSoloUsoPage } from './page-cliente-un-solo-uso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClienteUnSoloUsoPageRoutingModule
  ],
  declarations: [PageClienteUnSoloUsoPage]
})
export class PageClienteUnSoloUsoPageModule {}
