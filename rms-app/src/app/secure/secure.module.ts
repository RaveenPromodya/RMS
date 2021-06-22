import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedSecureModule } from './shared/shared-secure.module';
import { SecureRoutingModule } from './secure-routing.module';

import { SecureComponent } from './secure.component';

@NgModule({
    declarations: [
        SecureComponent,
    ],
    exports: [
        SecureComponent
    ],
    imports: [
        SharedSecureModule,
        SecureRoutingModule,
        BrowserModule
    ],
    providers: [],
})

export class SecureModule { }
