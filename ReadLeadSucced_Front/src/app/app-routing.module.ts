import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'livres',
    pathMatch: 'full'
  },

  {
    path: 'admin/recherche-utilisateur',
    loadChildren: () => import('./pages/admin/recherche-utilisateur/recherche-utilisateur.module').then( m => m.RechercheUtilisateurPageModule)
  },
  {
    path: 'gestion-livre',
    loadChildren: () => import('./pages/admin/gestion-livre/gestion-livre.module').then( m => m.GestionLivrePageModule)
  },
  {
    path: 'auth/connexion',
    loadChildren: () => import('./pages/auth/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'creation-utilisateur',
    loadChildren: () => import('./pages/utilisateur/creation-utilisateur/creation-utilisateur.module').then( m => m.CreationUtilisateurPageModule)
  },
  {
    path: 'profil-utilisateur',
    loadChildren: () => import('./pages/utilisateur/profil-utilisateur/profil-utilisateur.module').then( m => m.ProfilUtilisateurPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'livre',
    loadChildren: () => import('./pages/livre/livre.module').then( m => m.LivrePageModule)
  },
  {
    path: 'livres',
    loadChildren: () => import('./pages/livres/livres.module').then( m => m.LivresPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
