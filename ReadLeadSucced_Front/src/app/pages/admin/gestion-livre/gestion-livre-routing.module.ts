import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionLivrePage } from './gestion-livre.page';

const routes: Routes = [
  {
    path: '',
    component: GestionLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionLivrePageRoutingModule {}
