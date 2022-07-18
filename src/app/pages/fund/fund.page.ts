import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import * as Highcharts from 'highcharts';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';





@Component({
  selector: 'app-fund',
  templateUrl: './fund.page.html',
  styleUrls: ['./fund.page.scss'],
})
export class FundPage implements OnInit {

  shareAmount : string = "" ;
  fundAmount : string = "" ;
  
  

  fund : any = { 
    loan  : 15 ,
    emergency :  25 ,
    investment :  50 ,
    amount : null ,
    shareAmount : null
  } ;

  rangeMax : number = 10 ;

  chartEnabled : boolean  = false ;
  
  
  isUserModal : boolean  = false ;

  highcharts = Highcharts;
  chartOptions : any = {} ;

  steps : any = [
    { step : 1 ,    title : 'مشخصات صندوق'  },
    { step : 2 ,    title : 'اعضای صندوق '  },
    { step : 3 ,    title : 'ایجاد صندوق '  }
  ]

  waitPeriods : any = [  ] ;

  currentStep : any  ;

   user : any = { } ;
   
   users : User[] = [
      {
        fullName : "رضا طهماسب",
        mobile : "09120000001" ,
        isAdmin : true
      },
      {
        fullName : " محمد محمدی",
        mobile : "09120000002"
      },
      {
        fullName : " حمید حامدی",
        mobile : "09120000003"
      },
    ] ;

    error : any = {};
    

  constructor( private generalService : GeneralService  , private router : Router  ) {
    this.goToStep(1 , true);
    for(let i = 1 ; i <= 12 ; i++){
      this.waitPeriods.push(i+" ماه");
    }
  }



  ngOnInit() {
    this.reflow();
  }


  formatNumber(object , item){
    setTimeout(() => {
      object[item] = this.generalService.formatCurrency(object[item]);
    }, 10);
  }

  calcMax(){
    this.rangeMax = 100 - (this.fund.loan + this.fund.emergency + this.fund.investment);
    this.reflow();
  }

  

  reflow(){
    this.updateChartOptions();
    this.chartEnabled = false ;
    setTimeout(() => {
      this.chartEnabled = true ;
    }, 0);
  }

  updateChartOptions(){
    this.chartOptions = {   
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    credits: {
      enabled: false
    },
    title: {
        text: ' '
    },
    tooltip: {
        pointFormat: '{series.name} <b>{point.percentage:.0f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '%<b>{point.name}</b>: {point.percentage:.0f}'
            }
        }
    },
    series: [{
            name: '',
            colorByPoint: true,
            data: [
              {
                name: 'درصد وام',
                y: this.fund.loan ,
                sliced: true,
                selected: true
              } ,
              {
                name: 'درصد وام اضطراری',
                y: this.fund.emergency ,
                sliced: true,
                selected: true
              } ,
              {
                name: 'درصد سرمایه گذاری ',
                y: this.fund.investment ,
                sliced: true,
                selected: true
              } ,
              {
                name: ' باقیمانده ',
                y: this.rangeMax ,
                sliced: true,
                selected: true
              } ,
            ]
        }]
     };
  }

  openUserModal(){
    this.isUserModal = true ;
  }
  
  closeUserModal(){
    this.isUserModal = false ;
  }

  clearUserForm(){
    this.user = { } ;
  }

  saveUser(){ 
    this.user.mobile = this.generalService.convertPersianDigit(this.user.mobile);
    if(this.generalService.validateMobileNumber(this.user.mobile)){ //============= check phone number validation
      if(this.generalService.validateStringLength(this.user.fullName , 3 , 35)){
        if(!this.checkUniqeUser(this.user)){
          this.users.push(this.user);
          this.closeUserModal();
          this.clearUserForm();
        }
        else{
          this.generalService.presentAlert("" , " این کاربر از قبل در صندوق حضور دارد" , " ") ;
        }
      }
      else{
        this.generalService.presentAlert("" ,"نام کاربر باید بین 3 تا 35 حرف باشد" , " ") ;
      }
    }
    else{
      this.generalService.presentAlert("","شماره تلفن معتبر نیست" , " ") ;
    }
  }

  deleteUser(user){
    this.users = this.users.filter(usr => usr.mobile != user.mobile ) ;
  }

  checkUniqeUser(user){
    return this.users.filter(usr => usr.mobile == user.mobile ).length ;
  }

  goToStep(step : number , isInit : boolean = false ){
    if(this.validateStepOne(isInit)){
      if(this.steps[step-1]){
        this.currentStep = this.steps[step-1] //============ to get index
      }
    }
  }

  validateStepOne(isInit : boolean = false){
    this.error = { } ;
    let result  = true ;
    if(!isInit){
      if(!this.generalService.validateStringLength(this.fund.title , 3 , 35) ){
        result = false ;
        this.error.fundTitle = "عنوان می بایست بین 3 تا 35 کاراکتر باشد";
      }
      else{
        if(!this.generalService.validateEmpty(this.fund.waitPeriod )){
          this.error.fundWaitPeriod = "مدت خواب پول نمی تواند خالی باشد" ;
          result = false ;
        }
        else{
          if(!this.generalService.validateEmpty(this.fund.amount)){
            this.error.fundAmount = "کارمزد نمی تواند خالی باشد" ;
            result = false ;
          }
          else{
            if(!this.generalService.validateEmpty(this.fund.shareAmount)){
              this.error.shareAmount = "لطفا مبلغ هر سهم را مشخص کنید" ;
              result = false ;
            }
          }
        }
      }
    }
    else{
      result = true ;
    }
    return result ;
  }

  createFund(){
    let funds : any = localStorage.getItem("funds") ;
    if(!funds){
      funds = [] ;
    }
    else{
      funds = JSON.parse(funds);
    }
    let time = new Date().getTime();
    this.fund.id = time ;
    this.fund.users = this.users ;
    funds.push(this.fund);
    funds = JSON.stringify(funds);
    localStorage.setItem("funds" , funds);
    this.generalService.presentToast("صندوق با موفقیت ایجاد شد");
    this.router.navigate(['/fund' , time ]);
  }

  
  

}
