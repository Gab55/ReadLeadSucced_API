import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilUtilisateurPage } from './profil-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilUtilisateurPageRoutingModule {}
