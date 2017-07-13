import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BackRoutingModule } from './back.routing';

import { MenuService } from './menu/menu.service';
import { AuthService } from '../login/auth.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmotesComponent } from './emotes/emotes.component';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';

import { AuthGuard } from '../login/auth.guard';

@NgModule({
    declarations: [
        NavbarComponent,
        MenuComponent,
        DashboardComponent,
        EmotesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        BackRoutingModule
    ],
    providers: [
        MenuService,
        AuthService,
        AuthGuard,
    ]
})
export class BackModule { }
