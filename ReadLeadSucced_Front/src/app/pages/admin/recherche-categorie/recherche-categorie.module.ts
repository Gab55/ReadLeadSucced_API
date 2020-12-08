import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheCategoriePageRoutingModule } from './recherche-categorie-routing.module';

import { RechercheCategoriePage } from './recherche-categorie.page';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    RechercheCategoriePageRoutingModule
  ],
  declarations: [RechercheCategoriePage],
  providers: [CategorieWebServiceService]
})
export class RechercheCategoriePageModule {}
