import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceUserComponent } from './espace-user.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MyProfilComponent } from './my-profil/my-profil.component';

const routes: Routes = [
  {
    path:'',component:EspaceUserComponent,children:[
      {
        path:"",component:MyProjectsComponent
      },
      {
        path:"projectDetail",component:ProjectDetailsComponent
      },
      {
        path:"myTasks",component:MyTasksComponent
      },
      {
        path:"myTeams",component:MyTeamsComponent
      },
      {
        path:"myProfil",component:MyProfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspaceUserRoutingModule { }
