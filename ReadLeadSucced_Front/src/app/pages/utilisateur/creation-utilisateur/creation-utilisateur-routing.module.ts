import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationUtilisateurPage } from './creation-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: CreationUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationUtilisateurPageRoutingModule {}
