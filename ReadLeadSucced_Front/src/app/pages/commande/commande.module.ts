import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommandePageRoutingModule } from './commande-routing.module';

import { CommandePage } from './commande.page';
import { HttpClientModule } from '@angular/common/http';
import { UtilisateurWebServiceService } from 'src/app/webServices/Utilisateur/utilisateur-web-service.service';
import { PanierWebService } from 'src/app/webServices/Panier/panier.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommandePageRoutingModule
  ],
  declarations: [CommandePage],
  providers: [UtilisateurWebServiceService, PanierWebService]
})
export class CommandePageModule {}
