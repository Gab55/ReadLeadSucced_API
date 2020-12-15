import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../Shared/login-interceptor.service';

import { LivrePage } from './livre.page';
import { PanierWebService } from '../../webServices/Panier/panier.service';
import { CommentaireService } from '../../webServices/Commentaire/commentaire-web-service.service';

const routes: Routes = [
  {
    path: '',
    component: LivrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true 
    },
    PanierWebService,
    CommentaireService
  ]
})
export class LivrePageRoutingModule {}
