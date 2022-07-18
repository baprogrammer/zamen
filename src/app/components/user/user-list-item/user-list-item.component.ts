import { Component, Input, OnInit , Output , EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {

  @Input() users : User[] = [] ;

  @Output() onDelete = new EventEmitter<any>() ;

  @Input() canDelete : boolean = true ;
  @Input() showBadges : boolean = false ;
  
  deleteUser(user : any ){
    this.onDelete.emit(user) ;
  }

  constructor() { }

  ngOnInit() {}

}
