import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageClienteDashboardPageRoutingModule } from './page-cliente-dashboard-routing.module';

import { PageClienteDashboardPage } from './page-cliente-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClienteDashboardPageRoutingModule
  ],
  declarations: [PageClienteDashboardPage]
})
export class PageClienteDashboardPageModule {}
