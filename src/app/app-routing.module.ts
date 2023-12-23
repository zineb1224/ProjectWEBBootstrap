import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
    import("./page-publicitaire/page-publicitaire.module").then(m => m.PagePublicitaireModule)
  },
  {
    path: "espaceUser",
    loadChildren: () =>
    import("./espace-user/espace-user.module").then(m => m.EspaceUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
