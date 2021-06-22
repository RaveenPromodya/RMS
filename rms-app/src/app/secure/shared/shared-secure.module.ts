import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { TopNavComponent } from './top-nav/top-nav.component';

const routes: Routes = [];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TopNavComponent
    ],
    exports: [
        TopNavComponent,
        RouterModule
    ],
    providers: [],
})
export class SharedSecureModule { }