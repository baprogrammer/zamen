import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundDetailPageRoutingModule } from './fund-detail-routing.module';

import { FundDetailPage } from './fund-detail.page';
import { ComponentsModule } from 'src/app/modules/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundDetailPageRoutingModule ,
    ComponentsModule
  ],
  declarations: [FundDetailPage ]
})
export class FundDetailPageModule {}
