import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { GestionLivrePageRoutingModule } from './gestion-livre-routing.module';

import { GestionLivrePage } from './gestion-livre.page';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    GestionLivrePageRoutingModule
  ],
  declarations: [GestionLivrePage],
  providers: [LivreWebServiceService,CategorieWebServiceService]

})
export class GestionLivrePageModule {}
