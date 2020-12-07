import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';


import { RechercheLivrePageRoutingModule } from './recherche-livre-routing.module';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';

import { RechercheLivrePage } from './recherche-livre.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    RechercheLivrePageRoutingModule
  ],
  declarations: [RechercheLivrePage],
  providers: [LivreWebServiceService]
})
export class RechercheLivrePageModule {}
