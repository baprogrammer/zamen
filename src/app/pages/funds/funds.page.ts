import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FundService } from 'src/app/services/fund.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.page.html',
  styleUrls: ['./funds.page.scss'],
})
export class FundsPage implements OnInit {

  constructor(private cookieService : CookieService , private fundService : FundService ) { }

  funds : any = [] ;

  ngOnInit() {
    this.funds = this.fundService.getFunds();
  }

 

}
