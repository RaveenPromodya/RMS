import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../../services/api/users.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  public users = [];
  public isLoading = true;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;
      this.isLoading = false;
    })
  }

  updateUserCollection(data) {
    this.isLoading = true;
    if(data == 'User Deleted') {
      this.usersService.getAllUsers().subscribe(data => {
        this.users = data;
        this.isLoading = false;
      })
    }
  }

}
