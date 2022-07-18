import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FundDetailPage } from '../fund-detail/fund-detail.page';

import { FundPage } from './fund.page';

const routes: Routes = [
  {
    path: '',
    component: FundPage
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundPageRoutingModule {}
