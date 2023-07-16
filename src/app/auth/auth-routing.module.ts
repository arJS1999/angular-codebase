import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponent } from '../no-page/no-page.component';
import { UserSigninComponent } from './signin/user-signin.component';
import { UserSignupComponent } from './signup/user-profile.component';

const routes: Routes = [
  { component: UserSigninComponent, path: '' },
  { component: UserSignupComponent, path: 'signup' },
  { component: NoPageComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
