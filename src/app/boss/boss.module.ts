import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSliderModule,
    MdSlideToggleModule,
} from '@angular/material';

import { BossRoutingModule } from './boss.routing';

import { BossComponent } from './boss.component';
import { BossFormComponent } from './boss-form/boss-form.component';

@NgModule({
    declarations: [
        BossComponent,
        BossFormComponent,
    ],
    imports: [
        BossRoutingModule,
        FormsModule,
        MdButtonModule,
        MdCardModule,
        MdInputModule,
        MdSliderModule,
        MdSlideToggleModule,
    ],
    providers: []
})
export class BossModule { }
