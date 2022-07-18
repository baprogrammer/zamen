import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'صندوق ها', url: '/funds', icon: 'cube' },
    { title: ' ایجاد صندوق', url: '/fund', icon: 'cube' },
    { title: 'پشتیبانی', url: '/fund/1', icon: 'chatbox' , isDisabled : true },
    { title: 'درباره ما', url: '/fund/2', icon: 'information' , isDisabled : true },
    { title: 'خروج', url: '/fund/3', icon: 'exit' , isDisabled : true },
  ];
  
  constructor() {}
}
