import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationUtilisateurPageRoutingModule } from './creation-utilisateur-routing.module';

import { CreationUtilisateurPage } from './creation-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationUtilisateurPageRoutingModule
  ],
  declarations: [CreationUtilisateurPage]
})
export class CreationUtilisateurPageModule {}
