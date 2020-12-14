import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCommandePageRoutingModule } from './gestion-commande-routing.module';

import { GestionCommandePage } from './gestion-commande.page';
import { HttpClientModule } from '@angular/common/http';
import { CommandeWebServiceService } from 'src/app/webServices/Commande/commande-web-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    GestionCommandePageRoutingModule
  ],
  declarations: [GestionCommandePage],
  providers: [CommandeWebServiceService]

})
export class GestionCommandePageModule {}
