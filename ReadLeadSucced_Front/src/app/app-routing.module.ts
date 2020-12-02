import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GestionLivreComponent } from './pages/admin/gestion-livre/gestion-livre.component';
import { RechercheUtilisateurComponent } from './pages/admin/recherche-utilisateur/recherche-utilisateur.component';
import { ConnexionComponent } from './pages/auth/connexion/connexion.component';
import { LivreComponent } from './pages/livre/livre.component';
import { LivresComponent } from './pages/livres/livres.component';
import { PanierComponent } from './pages/panier/panier.component';
import { CreationUtilisateurComponent } from './pages/utilisateur/creation-utilisateur/creation-utilisateur.component';
import { ProfilUtilisateurComponent } from './pages/utilisateur/profil-utilisateur/profil-utilisateur.component';
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
    path: 'auth/connexion',
    component: ConnexionComponent
  },
  {
    path: 'livre/?id',
    component: LivreComponent
  },
  {
    path: 'livres',
    component: LivresComponent
  },
  {
    path: 'panier',
    component: PanierComponent
  },
  {
    path: 'admin/recherche-utilisateur',
    // component: RechercheUtilisateurComponent,
    loadChildren: () => import('./pages/admin/recherche-utilisateur/recherche-utilisateur.component').then( m => m.RechercheUtilisateurComponent)
  },
  {
    path: 'utilisateur/creation-utilisateur',
    component: CreationUtilisateurComponent
  },
  {
    path: 'utilisateur/profil-utilisateur',
    component: ProfilUtilisateurComponent
  },
  {
    path: 'admin/gestion-livre',
    component: GestionLivreComponent
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
