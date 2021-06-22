import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

import { UserCardComponent } from './collection/user-card/user-card.component';
import { CollectionComponent } from './collection/collection.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
    declarations: [
        UserCardComponent,
        CollectionComponent,
        EditUserComponent,
        AddUserComponent
    ],
    exports: [
        UserCardComponent,
        CollectionComponent
    ],
    imports: [
        UsersRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
})

export class UsersModule { }