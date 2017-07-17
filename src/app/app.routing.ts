import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './login/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }, {
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'logout',
        component: LoginComponent,
    }, {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'emotes',
        loadChildren: 'app/emotes/emotes.module#EmotesModule',
        canActivate: [AuthGuard]
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
export class RoutingModule { }
