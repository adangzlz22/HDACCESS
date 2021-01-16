import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageAcercaDePageRoutingModule } from './page-acerca-de-routing.module';

import { PageAcercaDePage } from './page-acerca-de.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageAcercaDePageRoutingModule
  ],
  declarations: [PageAcercaDePage]
})
export class PageAcercaDePageModule {}
