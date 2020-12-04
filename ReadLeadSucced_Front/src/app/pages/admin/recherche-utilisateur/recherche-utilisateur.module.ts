import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { RechercheUtilisateurPageRoutingModule } from './recherche-utilisateur-routing.module';
import { UtilisateurWebServiceService } from '../../../webServices/Utilisateur/utilisateur-web-service.service'; 

import { RechercheUtilisateurPage } from './recherche-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    RechercheUtilisateurPageRoutingModule
  ],
  declarations: [RechercheUtilisateurPage],
  providers: [UtilisateurWebServiceService]
})
export class RechercheUtilisateurPageModule {}
