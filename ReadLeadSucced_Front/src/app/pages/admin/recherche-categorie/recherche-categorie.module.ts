import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheCategoriePageRoutingModule } from './recherche-categorie-routing.module';

import { RechercheCategoriePage } from './recherche-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheCategoriePageRoutingModule
  ],
  declarations: [RechercheCategoriePage]
})
export class RechercheCategoriePageModule {}
