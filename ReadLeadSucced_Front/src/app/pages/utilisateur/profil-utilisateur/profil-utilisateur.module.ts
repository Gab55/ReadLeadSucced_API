import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilUtilisateurPageRoutingModule } from './profil-utilisateur-routing.module';

import { ProfilUtilisateurPage } from './profil-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilUtilisateurPageRoutingModule
  ],
  declarations: [ProfilUtilisateurPage]
})
export class ProfilUtilisateurPageModule {}
