import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmotesComponent } from './emotes/emotes.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './login/login.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [LoginGuard]
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'logout',
        component: LoginComponent
    }, {
        path: 'emotes',
        component: EmotesComponent,
        canActivate: [LoginGuard]
    }, {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {
}
