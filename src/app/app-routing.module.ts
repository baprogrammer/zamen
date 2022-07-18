import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fund',
    pathMatch: 'full'
  },
  {
    path: 'fund',
    loadChildren: () => import('./pages/fund/fund.module').then( m => m.FundPageModule)
  },
  {
    path: 'fund/:id',
    loadChildren: () => import('./pages/fund-detail/fund-detail.module').then( m => m.FundDetailPageModule)
  },
  {
    path: 'funds',
    loadChildren: () => import('./pages/funds/funds.module').then( m => m.FundsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
