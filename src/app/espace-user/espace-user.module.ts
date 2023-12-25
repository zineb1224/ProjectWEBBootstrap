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

@NgModule({
  declarations: [
    EspaceUserComponent,
    MyProjectsComponent,
    SideBarComponent,
    MyTasksComponent,
    MyTeamsComponent
  ],
  imports: [
    CommonModule,
    EspaceUserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EspaceUserModule { }
