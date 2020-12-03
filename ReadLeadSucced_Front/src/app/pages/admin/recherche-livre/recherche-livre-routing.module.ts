import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheLivrePage } from './recherche-livre.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheLivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheLivrePageRoutingModule {}
