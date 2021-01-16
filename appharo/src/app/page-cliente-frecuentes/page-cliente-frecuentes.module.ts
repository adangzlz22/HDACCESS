import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageClienteFrecuentesPageRoutingModule } from './page-cliente-frecuentes-routing.module';

import { PageClienteFrecuentesPage } from './page-cliente-frecuentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClienteFrecuentesPageRoutingModule
  ],
  declarations: [PageClienteFrecuentesPage]
})
export class PageClienteFrecuentesPageModule {}
