import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LivreComponent } from './pages/livre/livre.component';
import { LivresComponent } from './pages/livres/livres.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    component: LivreComponent
  },
  // {
  //   path: 'catalogue',
  //   loadChildren: () => import('./pages/catalogue/catalogue.module').then( m => m.CataloguePageModule)
  // },
  {
    path: 'livre/?id',
    component: LivreComponent
  },
  {
    path: 'livres',
    component: LivresComponent
  },
  // {
  //   path: 'connexion',
  // }
  // {
  //   path: 'creation-client',
  //   loadChildren: () => import('./pages/utilisateur/creation-utilisateur/creation-utilisateur.module').then( m => m.CreationUtilisateurPageModule)
  // },
  // {
  //   path: 'profil-client',
  //   loadChildren: () => import('./pages/profil-client/profil-client.module').then( m => m.ProfilClientPageModule)
  // },
  // {
  //   path: 'panier',
  //   loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  // },
  // {
  //   path: 'ges',
  //   loadChildren: () => import('./pages/admin/ges/ges.module').then( m => m.GesPageModule)
  // },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
