import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './../../../../Shared/login-interceptor.service';

import { ProfilUtilisateurPage } from './profil-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilUtilisateurPage
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
  ]
})
export class ProfilUtilisateurPageRoutingModule {}
