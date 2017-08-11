import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSliderModule,
    MdSlideToggleModule,
} from '@angular/material';

import { BossComponent } from './boss.component';
import { BossFormComponent } from './boss-form/boss-form.component';

import { BossRoutingModule } from './boss.routing';

import { BossService } from './boss.service';


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
  providers: [

  ]
})
export class BossModule {
}
