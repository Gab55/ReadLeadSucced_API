import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationLivrePageRoutingModule } from './creation-livre-routing.module';

import { CreationLivrePage } from './creation-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationLivrePageRoutingModule
  ],
  declarations: [CreationLivrePage]
})
export class CreationLivrePageModule {}
