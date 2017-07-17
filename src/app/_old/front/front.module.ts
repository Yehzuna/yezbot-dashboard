import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front.routing';

import { FrontComponent } from './front.component';

@NgModule({
    declarations: [
        FrontComponent,
    ],
    imports: [
        FrontRoutingModule,
        CommonModule,
    ],
    providers: []
})
export class FrontModule { }
