import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RolesService } from '../../../../services/api/roles.service';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.scss']
})
export class RoleCardComponent implements OnInit {
  @Input() roleData;
  @Output() roleDeleteEvent = new EventEmitter<string>();

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit() {
  }

  proceedToDeleteTheRole(id) {
    localStorage.setItem('roleId', id);
  }

  deleteRole() {
    this.rolesService.deleteRole(localStorage.roleId).subscribe(response => {
      this.roleDeleteEvent.next(response.message);
    })
    localStorage.clear();
  }
}
