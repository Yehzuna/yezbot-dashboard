import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmotesComponent } from './emotes/emotes.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, {
    path: 'emotes',
    component: EmotesComponent
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
