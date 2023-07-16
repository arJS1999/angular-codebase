import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { UserSigninComponent } from './signin/user-signin.component';
import { UserSignupComponent } from './signup/user-profile.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    UserSignupComponent,
    UserSigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
})
export class AuthModule {}
