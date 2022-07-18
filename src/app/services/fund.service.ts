import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private cookieService : CookieService) { }

  getFunds(){  
    // let f : any = this.cookieService.get('funds');
    let f : any = localStorage.getItem("funds");
    console.log(f);
    
    
    if(f){
      f = JSON.parse(f) ;
      console.log(f);
    }
    else{
      f = [] ;
    }
    return f ;
  }

}
