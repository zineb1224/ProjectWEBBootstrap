import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaceUserRoutingModule } from './espace-user-routing.module';
import { EspaceUserComponent } from './espace-user.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SideBarComponent } from './_shared/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { ProjectItemComponent } from './my-projects/project-item/project-item.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskItemComponent } from './my-tasks/task-item/task-item.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { TeamItemComponent } from './my-teams/team-item/team-item.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { ProjectContentComponent } from './team-details/project-content/project-content.component';
import { MemberItemComponent } from './team-details/project-content/member-item/member-item.component';
import { SkillItemComponent } from './my-profil/skill-item/skill-item.component';
import { CetificatItemComponent } from './my-profil/cetificat-item/cetificat-item.component';
import { ItemMemberComponent } from './my-teams/team-item/item-member/item-member.component';
import { MemberProfilComponent } from './member-profil/member-profil.component';
import { ItemCertiComponent } from './member-profil/item-certi/item-certi.component';
import { ItemSkillComponent } from './member-profil/item-skill/item-skill.component';
import { ModalEditComponent } from './my-projects/project-item/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    EspaceUserComponent,
    MyProjectsComponent,
    SideBarComponent,
    MyTasksComponent,
    MyTeamsComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    TaskItemComponent,
    MyProfilComponent,
    TeamItemComponent,
    TeamDetailsComponent,
    ProjectContentComponent,
    MemberItemComponent,
    SkillItemComponent,
    CetificatItemComponent,
    ItemMemberComponent,
    MemberProfilComponent,
    ItemCertiComponent,
    ItemSkillComponent,
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    EspaceUserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class EspaceUserModule { }
