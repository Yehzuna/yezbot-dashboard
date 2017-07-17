import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmotesComponent } from './emotes.component';

const loginRoutes: Routes = [
    { path: '', component: EmotesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class EmotesRoutingModule { }
