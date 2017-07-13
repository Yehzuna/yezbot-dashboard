import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MdButtonModule,
    MdRippleModule
} from '@angular/material';

import { RoutingModule } from './app.routing';

import { AuthService } from './login/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MdButtonModule,
        MdRippleModule,
        RoutingModule
    ],
    providers: [
        AuthService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
