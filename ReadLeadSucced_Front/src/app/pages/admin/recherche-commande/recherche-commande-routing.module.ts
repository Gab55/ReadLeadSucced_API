import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheCommandePage } from './recherche-commande.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheCommandePageRoutingModule {}
