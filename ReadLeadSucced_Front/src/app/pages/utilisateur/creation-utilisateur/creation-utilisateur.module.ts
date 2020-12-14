import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { UtilisateurWebServiceService } from '../../../webServices/Utilisateur/utilisateur-web-service.service'; 
import { CreationUtilisateurPageRoutingModule } from './creation-utilisateur-routing.module';

import { CreationUtilisateurPage } from './creation-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,

    CreationUtilisateurPageRoutingModule
  ],
  declarations: [CreationUtilisateurPage],
  providers: [UtilisateurWebServiceService]
})
export class CreationUtilisateurPageModule {}
