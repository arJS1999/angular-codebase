import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserChatComponent } from './user-chat/user-chat.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSkillSelectComponent } from './user-skill-select/user-skill-select.component';
import { UserSkillListComponent } from './user-skill-list/user-skill-list.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserSidebarComponent,
    UserChatComponent,
    UserListComponent,
    UserSkillSelectComponent,
    UserSkillListComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialComponentModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
})
export class UserModule {}
