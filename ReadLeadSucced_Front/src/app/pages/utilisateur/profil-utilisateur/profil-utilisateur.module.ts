import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilUtilisateurPageRoutingModule } from './profil-utilisateur-routing.module';

import { ProfilUtilisateurPage } from './profil-utilisateur.page';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurWebServiceService } from 'src/app/webServices/Utilisateur/utilisateur-web-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfilUtilisateurPageRoutingModule
  ],
  declarations: [ProfilUtilisateurPage],
  providers: [UtilisateurWebServiceService]

})
export class ProfilUtilisateurPageModule {}
