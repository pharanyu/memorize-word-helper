import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupDetailComponent } from './components/group-detail/group-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RandomComponent } from './components/random/random.component';
import { ManageComponent } from './components/manage/manage.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { UserService } from './services/user.service';
import { SignInComponent } from './components/user/sign-in/sign-in.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    GroupDetailComponent,
    NavbarComponent,
    RandomComponent,
    ManageComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
