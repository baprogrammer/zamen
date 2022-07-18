import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { FundPageModule } from './pages/fund/fund.module';








@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule, 
    CommonModule,
    IonicModule.forRoot(),
     AppRoutingModule ,  
     FundPageModule ,
     
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy } , CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
