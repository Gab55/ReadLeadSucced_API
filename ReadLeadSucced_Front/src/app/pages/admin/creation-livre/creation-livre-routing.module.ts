import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationLivrePage } from './creation-livre.page';

const routes: Routes = [
  {
    path: '',
    component: CreationLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationLivrePageRoutingModule {}
