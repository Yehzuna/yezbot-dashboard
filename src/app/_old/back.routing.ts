import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { EmotesComponent } from '../emotes/emotes.component';

import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    }
];
const routes2: Routes = [
    {
        path: 'emotes',
        component: EmotesComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        RouterModule.forRoot(routes2)
    ],
    exports: [
        RouterModule
    ]
})
export class BackRoutingModule { }
