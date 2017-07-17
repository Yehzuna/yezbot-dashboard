import { NgModule } from '@angular/core';

import { EmotesRoutingModule } from './emotes.routing';

import { EmotesComponent } from './emotes.component';

@NgModule({
    declarations: [
        EmotesComponent,
    ],
    imports: [
        EmotesRoutingModule
    ],
    providers: []
})
export class EmotesModule { }
