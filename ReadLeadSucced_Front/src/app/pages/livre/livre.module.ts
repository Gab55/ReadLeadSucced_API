import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { LivrePageRoutingModule } from './livre-routing.module';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';

import { LivrePage } from './livre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    LivrePageRoutingModule
  ],
  declarations: [LivrePage],
  providers: [LivreWebServiceService]
})
export class LivrePageModule {}
