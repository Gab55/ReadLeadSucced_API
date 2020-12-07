import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationCategoriePage } from './creation-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: CreationCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationCategoriePageRoutingModule {}
