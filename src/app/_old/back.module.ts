import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BackRoutingModule } from './back.routing';

import { MenuService } from '../menu/menu.service';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmotesComponent } from '../emotes/emotes.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
    declarations: [
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
        MenuService
    ]
})
export class BackModule { }
