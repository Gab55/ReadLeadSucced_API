import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';
import { PanierPage } from './panier.page';
import { PanierWebService } from '../../webServices/Panier/panier.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    PanierPageRoutingModule
  ],
  declarations: [PanierPage],
  providers: [PanierWebService]
})
export class PanierPageModule {}
