import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { FundDetailPage } from './fund-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FundDetailPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class FundDetailPageRoutingModule {}
