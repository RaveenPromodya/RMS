import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router'

import { RolesService } from '../../../services/api/roles.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  @ViewChild('submitRoleChanges') submitRoleChanges;

  public role;
  public isLoading = true;
  public modalMessage;
  public formData: FormGroup;

  constructor(
    private rolesService: RolesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.formData = new FormGroup({
      rolename: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      createPermission: new FormControl(),
      updatePermission: new FormControl(),
      deletePermission: new FormControl(),
      grantPermission: new FormControl()
    });

    let roleId = this.activatedRoute.snapshot.paramMap.get("id");
    this.rolesService.getRoleById(roleId).subscribe(role => {
      this.role = role;
      this.formData.patchValue({
        rolename: this.role.rolename,
        createPermission: this.role.permissions[0].selected,
        updatePermission: this.role.permissions[1].selected,
        deletePermission: this.role.permissions[2].selected,
        grantPermission: this.role.permissions[3].selected
      })
      this.isLoading = false;
    })
  }

  formChanges(data) {
    if (!data.value.createPermission && !data.value.updatePermission && !data.value.deletePermission && !data.value.grantPermission) {
      this.submitRoleChanges.nativeElement.disabled = true;
    } else if (data.value.rolename == '') {
      this.submitRoleChanges.nativeElement.disabled = true;
    } else {
      this.submitRoleChanges.nativeElement.disabled = false;
    }
  }

  onClickSubmit(data) {
    let roleData = {
      rolename: data.value.rolename,
      permissions: [
        {
          name: "Create",
          selected: data.value.createPermission
        },
        {
          name: "Update",
          selected: data.value.updatePermission
        },
        {
          name: "Delete",
          selected: data.value.deletePermission
        },
        {
          name: "Grant",
          selected: data.value.grantPermission
        }
      ]
    }
    
    this.rolesService.updateRole(this.role._id, roleData).subscribe(response => {
      this.modalMessage = response.message;
    })
  }
}
