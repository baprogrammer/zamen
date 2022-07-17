import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule  } from '@ionic/angular';

import { FundPageRoutingModule } from './fund-routing.module';

import { FundPage } from './fund.page';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserListItemComponent } from 'src/app/components/user/user-list-item/user-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundPageRoutingModule ,
    HighchartsChartModule ,
    
  ],
  declarations: [FundPage , UserListItemComponent]
})
export class FundPageModule {}
