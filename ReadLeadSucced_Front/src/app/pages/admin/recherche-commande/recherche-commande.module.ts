import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheCommandePageRoutingModule } from './recherche-commande-routing.module';

import { RechercheCommandePage } from './recherche-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheCommandePageRoutingModule
  ],
  declarations: [RechercheCommandePage]
})
export class RechercheCommandePageModule {}
