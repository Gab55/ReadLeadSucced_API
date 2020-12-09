import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';


import { ConnexionPageRoutingModule } from './connexion-routing.module';
import { ConnexionPage } from './connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConnexionPageRoutingModule
  ],
  providers: [    
  { 
    provide: HTTP_INTERCEPTORS,
    useClass: LoginInterceptor,
    multi: true 
  }
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
