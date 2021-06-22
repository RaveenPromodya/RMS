import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection/collection.component';
import { EditUserComponent } from './edit-user/edit-user.component'; 
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
    { path: '', component: CollectionComponent },
    {
        path: 'edit-user/:id',
        component: EditUserComponent
    },
    {
        path: 'add-user',
        component: AddUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }