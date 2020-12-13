import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../Shared/login-interceptor.service';
import { LivreWebServiceService } from './webServices/Livre/livre-web-service.service';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule,
    ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    LivreWebServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true 
    },
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
