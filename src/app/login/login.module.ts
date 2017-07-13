import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MdButtonModule,
    MdInputModule
} from '@angular/material';

import { LoginRoutingModule } from './login.routing';

import { LoginComponent } from './login.component';

import { AuthGuard } from './auth.guard';

import { AuthService } from './auth.service';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        MdButtonModule,
        MdInputModule,
        FormsModule,
        HttpModule,
        LoginRoutingModule,
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class LoginModule { }
