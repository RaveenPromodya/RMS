import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RolesRoutingModule } from './roles-routing.module';

import { CollectionComponent } from './collection/collection.component';
import { RoleCardComponent } from './collection/role-card/role-card.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

@NgModule({
    declarations: [
        CollectionComponent,
        RoleCardComponent,
        AddRoleComponent,
        EditRoleComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RolesRoutingModule
    ],
    providers: [],
})

export class RolesModule { }