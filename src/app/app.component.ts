import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'صندوق ها', url: '/folder/Inbox', icon: 'cube' },
    { title: 'پشتیبانی', url: '/folder/Archived', icon: 'chatbox' },
    { title: 'درباره ما', url: '/folder/Trash', icon: 'information' },
    { title: 'خروج', url: '/folder/Spam', icon: 'exit' },
  ];
  
  constructor() {}
}
