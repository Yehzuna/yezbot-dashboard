import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './app.routing';

import { ApiService } from './_services/api.service';
import { MenuService } from './menu/menu.service';
import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmotesComponent } from './emotes/emotes.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './login/login.guard';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        MenuComponent,
        DashboardComponent,
        EmotesComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule
    ],
    providers: [
        ApiService,
        MenuService,
        LoginService,
        LoginGuard,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
