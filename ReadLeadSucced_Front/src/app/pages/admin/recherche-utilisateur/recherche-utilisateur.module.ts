import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheUtilisateurPageRoutingModule } from './recherche-utilisateur-routing.module';

import { RechercheUtilisateurPage } from './recherche-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheUtilisateurPageRoutingModule
  ],
  declarations: [RechercheUtilisateurPage]
})
export class RechercheUtilisateurPageModule {}
