import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { NoPageComponent } from '../no-page/no-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { UserSkillSelectComponent } from './user-skill-select/user-skill-select.component';
import { UserSkillListComponent } from './user-skill-list/user-skill-list.component';

const routes: Routes = [
  {
    component: UserSidebarComponent,
    path: '',
    children: [
      {
        component: NavbarComponent,
        path: '',
        children: [
          {
            component: UserListComponent,
            path: 'list',
            canActivate: [AuthGuard],
          },
          {
            component: UserChatComponent,
            path: 'chat',
            canActivate: [AuthGuard],
          },
          {
            component: UserSkillSelectComponent,
            path: 'skill',
            canActivate: [AuthGuard],
          },
          {
            component: UserSkillListComponent,
            path: 'skillList',
            canActivate: [AuthGuard],
          },
          { component: NoPageComponent, path: '**' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
