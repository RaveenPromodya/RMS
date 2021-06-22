import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { RolesService } from '../../../services/api/roles.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  @ViewChild('submitRoleChanges') submitRoleChanges;

  public formData: FormGroup;
  public modalMessage;

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit() {
    this.formData = new FormGroup({
      rolename: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      createPermission: new FormControl(false),
      updatePermission: new FormControl(false),
      deletePermission: new FormControl(false),
      grantPermission: new FormControl(false)
    });
  }

  formChanges(data) {
    if (!data.value.createPermission && !data.value.updatePermission && !data.value.deletePermission && !data.value.grantPermission) {
      this.submitRoleChanges.nativeElement.disabled = true;
    } else if(data.value.rolename == '') {
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
    
    this.rolesService.createRole(roleData).subscribe(response => {
      this.modalMessage = response.message
    })
  }
}
