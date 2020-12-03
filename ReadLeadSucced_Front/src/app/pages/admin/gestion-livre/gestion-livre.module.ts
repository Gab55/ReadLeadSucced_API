import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionLivrePageRoutingModule } from './gestion-livre-routing.module';

import { GestionLivrePage } from './gestion-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionLivrePageRoutingModule
  ],
  declarations: [GestionLivrePage]
})
export class GestionLivrePageModule {}
