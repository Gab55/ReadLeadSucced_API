import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheUtilisateurPage } from './recherche-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheUtilisateurPageRoutingModule {}
