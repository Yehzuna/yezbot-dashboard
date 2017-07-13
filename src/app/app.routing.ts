import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/front/front.module#FrontModule',
    }, {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
    }, {
        path: 'dashboard',
        loadChildren: 'app/back/back.module#BackModule',
        canLoad: [AuthGuard]
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
