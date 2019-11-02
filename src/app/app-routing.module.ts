import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomComponent } from './components/random/random.component';
import { ManageComponent } from './components/manage/manage.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  { path: 'random', component: RandomComponent },
  { path: 'manage', component: ManageComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
