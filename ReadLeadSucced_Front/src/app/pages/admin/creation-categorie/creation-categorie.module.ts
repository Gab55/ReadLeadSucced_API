import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationCategoriePageRoutingModule } from './creation-categorie-routing.module';

import { CreationCategoriePage } from './creation-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationCategoriePageRoutingModule
  ],
  declarations: [CreationCategoriePage]
})
export class CreationCategoriePageModule {}
