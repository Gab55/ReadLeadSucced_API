import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CreationCategoriePageRoutingModule } from './creation-categorie-routing.module';

import { CreationCategoriePage } from './creation-categorie.page';
import { CategorieWebServiceService } from 'src/app/webServices/categorie/categorie-web-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    CreationCategoriePageRoutingModule
  ],
  declarations: [CreationCategoriePage],
  providers: [CategorieWebServiceService]
})
export class CreationCategoriePageModule {}
