import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheLivrePageRoutingModule } from './recherche-livre-routing.module';

import { RechercheLivrePage } from './recherche-livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheLivrePageRoutingModule
  ],
  declarations: [RechercheLivrePage]
})
export class RechercheLivrePageModule {}
