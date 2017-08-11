import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BossComponent } from './boss.component';
import { BossFormComponent } from './boss-form/boss-form.component';

const loginRoutes: Routes = [
  {path: '', component: BossComponent},
  {path: 'edit', component: BossFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class BossRoutingModule {
}
