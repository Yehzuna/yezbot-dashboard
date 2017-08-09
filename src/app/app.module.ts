import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
    MdButtonModule,
    MdRippleModule
} from '@angular/material';

import { RoutingModule } from './app.routing';

import { AlertService } from './alert/alert.service';
import { AuthService } from './login/auth.service';
import { MenuService } from './menu/menu.service';

import { AuthGuard } from './login/auth.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        MdButtonModule,
        MdRippleModule,
        RoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        MenuComponent,
        HomeComponent,
        LoginComponent,
        DashboardComponent,
        AlertComponent,
    ],
    providers: [
        AlertService,
        AuthService,
        MenuService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
