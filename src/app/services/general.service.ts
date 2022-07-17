import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private alertController : AlertController) { }

  

  convertPersianDigit = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)) ; //===== convert persian digits to latin

  formatCurrency(number){    //========= this method change regular number to comma seperated number  
      number = this.convertPersianDigit(number) ;
      number =  number.replace(/\D/g,'');   
      if(number.trim() != ''){
        return  parseInt(number.replace(/,/g, '')).toLocaleString('en-us');
      }
      else{
        return number ;
      }
  }


  validateNumber(str){
    return new RegExp('^[0-9]+$').test(str);
  }
  

  resetNumber(number){
    return  parseInt(number.replace(/,/g, ''));
  }

  validateMobileNumber(number){
    return new RegExp('^(\\+98|0)?9\\d{9}$').test(number);
  }

  validateStringLength(str : string , min , max){
    if(str && str.length <= max && str.length >= min  ){
      return true ;
    }
    else{
      return false ;
    }
  }

  validateEmpty(str){
    if(str && str.trim() != ''){
      return true ;
    }
    else{
      return false ;
    }
  }

  async presentAlert(header , subHeader , message?) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
