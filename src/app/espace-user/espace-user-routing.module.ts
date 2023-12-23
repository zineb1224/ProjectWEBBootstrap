import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceUserComponent } from './espace-user.component';

const routes: Routes = [
  {
    path:"", component:EspaceUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspaceUserRoutingModule { }
