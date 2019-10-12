import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomComponent } from './components/random/random.component';
import { ManageComponent } from './components/manage/manage.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent },
  { path: 'manage', component: ManageComponent },
  { path: '', redirectTo: 'random', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
