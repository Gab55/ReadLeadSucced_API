import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationCommandePage } from './validation-commande.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationCommandePageRoutingModule {}
