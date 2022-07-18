import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule  } from '@ionic/angular';

import { FundPageRoutingModule } from './fund-routing.module';

import { FundPage } from './fund.page';
import { HighchartsChartModule } from 'highcharts-angular';
import { ComponentsModule } from 'src/app/modules/components.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundPageRoutingModule ,
    HighchartsChartModule ,
    ComponentsModule
    
  ],
  declarations: [FundPage ]
})
export class FundPageModule {}
