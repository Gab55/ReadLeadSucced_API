import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LivresPageRoutingModule } from './livres-routing.module';
import { LivreWebServiceService } from 'src/app/webServices/Livre/livre-web-service.service';

import { LivresPage } from './livres.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    LivresPageRoutingModule
  ],
  declarations: [LivresPage],
  providers: [LivreWebServiceService]
})
export class LivresPageModule {}
