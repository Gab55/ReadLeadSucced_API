import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheCategoriePage } from './recherche-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheCategoriePageRoutingModule {}
