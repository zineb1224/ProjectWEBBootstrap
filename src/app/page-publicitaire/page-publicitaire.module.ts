import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePublicitaireRoutingModule } from './page-publicitaire-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagePublicitaireComponent } from './page-publicitaire.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PagePublicitaireComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagePublicitaireRoutingModule
  ]
})
export class PagePublicitaireModule { }
