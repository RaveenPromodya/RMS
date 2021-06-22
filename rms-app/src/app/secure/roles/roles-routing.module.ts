import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

const routes: Routes = [
    { path: '', component: CollectionComponent },
    { path: 'add-role', component: AddRoleComponent },
    { path: 'edit-role/:id', component: EditRoleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RolesRoutingModule { }