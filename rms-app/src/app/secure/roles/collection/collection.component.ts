import { Component, OnInit } from '@angular/core';

import { RolesService } from '../../../services/api/roles.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  public isLoading = true;
  public roles = [];

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit() {
    this.rolesService.getAllRoles().subscribe(data => {
      this.roles = data;
      this.isLoading = false;
    })
  }

  updateRoleCollection(data) {
    this.isLoading = true;
    if (data == 'Role deleted') {
      this.rolesService.getAllRoles().subscribe(data => {
        this.roles = data;
        this.isLoading = false;
      })
    }
  }

}
