import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomComponent } from './components/random/random.component';
import { ManageComponent } from './components/manage/manage.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'signup', component: SignUpComponent },
      { path: 'login', component: SignInComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: 'random', component: RandomComponent, canActivate: [AuthGuard] },
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'user/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
