import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecureComponent } from './secure.component';

const routes: Routes = [
    {
      path: 'app',
      component: SecureComponent,
      children: [
        { path: 'users', loadChildren: '../secure/users/users.module#UsersModule' },
        { path: 'roles', loadChildren: '../secure/roles/roles.module#RolesModule' }
      ]
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class SecureRoutingModule { }