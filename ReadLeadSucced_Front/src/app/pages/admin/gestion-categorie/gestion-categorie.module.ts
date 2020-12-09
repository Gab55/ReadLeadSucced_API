import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCategoriePageRoutingModule } from './gestion-categorie-routing.module';

import { GestionCategoriePage } from './gestion-categorie.page';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    GestionCategoriePageRoutingModule
  ],
  declarations: [GestionCategoriePage],
  providers: [CategorieWebServiceService]
})
export class GestionCategoriePageModule {}
