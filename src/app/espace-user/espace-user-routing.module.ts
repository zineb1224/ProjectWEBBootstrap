import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceUserComponent } from './espace-user.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { TestComponent } from './test/test.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MemberProfilComponent } from './member-profil/member-profil.component';

const routes: Routes = [
  {
    path:'',component:EspaceUserComponent,children:[
      {
        path:"",component:MyProjectsComponent
      },
      {
        path:"projectDetail/:id",component:ProjectDetailsComponent
      },
      {
        path:"myTasks",component:MyTasksComponent
      },
      {
        path:"myTeams",component:MyTeamsComponent
      },
      {
        path:"myProfil",component:MyProfilComponent
      },
      {
        path:"teamDetail/:id",component:TeamDetailsComponent
      },
      {
        path:"profilDetail/:id",component:MemberProfilComponent
      },
      {
        path:"test", component:TestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspaceUserRoutingModule { }
