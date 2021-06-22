import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 

import { UsersService } from '../../../../services/api/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent implements OnInit {
  @Input() userData;
  @Output() userDeleteEvent = new EventEmitter<string>();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUserById(this.userData._id).subscribe(data => {
      this.userData = data;
      if (data.rolename == null) {
        this.userData['rolename'] = '**This user does not have a role. Please assign a role';
      }
    })
  }

  deleteUser() {
    this.usersService.deleteUser(localStorage.userId).subscribe(response => {
      this.userDeleteEvent.next("User Deleted");
    });
    localStorage.clear();
  }

  proceedToDeleteTheUser(id) {
    localStorage.setItem('userId', id);
  }
}
