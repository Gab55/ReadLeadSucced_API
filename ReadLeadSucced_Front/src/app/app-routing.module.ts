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
    path: 'admin/gestion-livre/:id',
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
    path: 'livre/:id',
    loadChildren: () => import('./pages/livre/livre.module').then( m => m.LivrePageModule)
  },
  // {
  //   path: 'livres/:id',
  //   loadChildren: () => import('./pages/livres/livres.module').then( m => m.LivresPageModule)
  // },
  {
    path: 'livres',
    loadChildren: () => import('./pages/livres/livres.module').then( m => m.LivresPageModule)
  },
  {
    path: 'admin/recherche-livre',
    loadChildren: () => import('./pages/admin/recherche-livre/recherche-livre.module').then( m => m.RechercheLivrePageModule)
  },
  {
    path: 'admin/creation-livre',
    loadChildren: () => import('./pages/admin/creation-livre/creation-livre.module').then( m => m.CreationLivrePageModule)

  },
  {
    path: 'commande',
    loadChildren: () => import('./pages/commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'creation-categorie',
    loadChildren: () => import('./pages/admin/creation-categorie/creation-categorie.module').then( m => m.CreationCategoriePageModule)
  },
  {
    path: 'gestion-categorie/:id',
    loadChildren: () => import('./pages/admin/gestion-categorie/gestion-categorie.module').then( m => m.GestionCategoriePageModule)
  },
  {
    path: 'recherche-categorie',
    loadChildren: () => import('./pages/admin/recherche-categorie/recherche-categorie.module').then(m => m.RechercheCategoriePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
