import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationCommandePageRoutingModule } from './validation-commande-routing.module';

import { ValidationCommandePage } from './validation-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationCommandePageRoutingModule
  ],
  declarations: [ValidationCommandePage]
})
export class ValidationCommandePageModule {}
