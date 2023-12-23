import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaceUserRoutingModule } from './espace-user-routing.module';
import { EspaceUserComponent } from './espace-user.component';


@NgModule({
  declarations: [
    EspaceUserComponent
  ],
  imports: [
    CommonModule,
    EspaceUserRoutingModule
  ]
})
export class EspaceUserModule { }
