import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router'

import { UsersService } from '../../../services/api/users.service';
import { RolesService } from '../../../services/api/roles.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public user;
  public roles = [];
  public isLoading = true;
  public modalMessage;
  public formData: FormGroup;

  constructor(
    private usersService: UsersService,
    private rolesService: RolesService,
    private activatedRoute: ActivatedRoute,
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
      role: new FormControl(null),
    })

    let userId = this.activatedRoute.snapshot.paramMap.get("id");
    this.usersService.getUserById(userId).subscribe(user => {
      this.user = user;
      this.formData.patchValue({
        username: this.user.username,
        email: this.user.email,
      });
      this.isLoading = false;
    });

    this.rolesService.getAllRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  onClickSubmit(data) {
    let userData = {
      username: data.value.username,
      email: data.value.email,
    }

    if (data.value.role == null) {
      userData["roleId"] = this.user.roleId;
    } else {
      userData["roleId"] = data.value.role.id;
    }

    this.usersService.updateUser(this.user.id, userData).subscribe(response => {
      this.modalMessage = response.message;
    });
  }
}


