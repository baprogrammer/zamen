import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundService } from 'src/app/services/fund.service';

@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.page.html',
  styleUrls: ['./fund-detail.page.scss'],
})
export class FundDetailPage implements OnInit {
  fund : any = { title : '' } ;
  funds : any = [] ;

  currentTab: string = 'info' ;

  constructor(private route : ActivatedRoute , private fundService : FundService) {
    let id = this.route.snapshot.paramMap.get('id');
    this.funds = fundService.getFunds() ;
    this.getFund(id);
   }
  
  ngOnInit() {
  }

  getFund(id){
    this.fund = this.funds.filter(fnd => fnd.id == id )[0] ;
  }

  changeCurrentTab(tab){
    this.currentTab = tab.target.value ;
  }

  

  

}
