import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../../services/api/users.service';
import { RolesService } from '../../../services/api/roles.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public roles = [];
  public modalMessage;
  public formData: FormGroup;

  constructor(
    private usersService: UsersService,
    private rolesService: RolesService
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      role: new FormControl(null, Validators.compose([
        Validators.required,
      ])),
    })

    this.rolesService.getAllRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  onClickSubmit(data) {
    let userData = {
      username: data.value.username,
      email: data.value.email,
      roleId: data.value.role.id
    }

    this.usersService.createUser(userData).subscribe(response => {
      this.modalMessage = response.message;
    });
  }
}
