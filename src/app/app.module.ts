import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagePublicitaireModule } from './page-publicitaire/page-publicitaire.module';
import { FormsModule } from '@angular/forms';
import { EspaceUserModule } from './espace-user/espace-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PagePublicitaireModule,
    EspaceUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
