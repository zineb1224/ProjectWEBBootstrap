import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaceUserRoutingModule } from './espace-user-routing.module';
import { EspaceUserComponent } from './espace-user.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SideBarComponent } from './_shared/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { ProjectItemComponent } from './my-projects/project-item/project-item.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskItemComponent } from './my-tasks/task-item/task-item.component';
import { MyProfilComponent } from './my-profil/my-profil.component';

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
    MyProfilComponent
  ],
  imports: [
    CommonModule,
    EspaceUserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EspaceUserModule { }
