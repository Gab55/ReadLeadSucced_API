import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { CreationLivrePageRoutingModule } from './creation-livre-routing.module';

import { CreationLivrePage } from './creation-livre.page';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    CreationLivrePageRoutingModule
  ],
  declarations: [CreationLivrePage]
  ,
  providers: [LivreWebServiceService]
})
export class CreationLivrePageModule {}
