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
    redirectTo: 'auth/connexion',
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
    path: 'profil-utilisateur/:id',
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
    path: 'commande/:id',
    loadChildren: () => import('./pages/commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'admin/creation-categorie',
    loadChildren: () => import('./pages/admin/creation-categorie/creation-categorie.module').then( m => m.CreationCategoriePageModule)
  },
  {
    path: 'gestion-categorie/:id',
    loadChildren: () => import('./pages/admin/gestion-categorie/gestion-categorie.module').then( m => m.GestionCategoriePageModule)
  },
  {
    path: 'admin/recherche-categorie',
    loadChildren: () => import('./pages/admin/recherche-categorie/recherche-categorie.module').then(m => m.RechercheCategoriePageModule)
  },
  {
    path: 'validation-commande',
    loadChildren: () => import('./pages/validation-commande/validation-commande.module').then( m => m.ValidationCommandePageModule)
  },
  {
    path: 'admin/recherche-commande',
    loadChildren: () => import('./pages/admin/recherche-commande/recherche-commande.module').then( m => m.RechercheCommandePageModule)
  },
  {
    path: 'admin/gestion-commande/:id',
    loadChildren: () => import('./pages/admin/gestion-commande/gestion-commande.module').then( m => m.GestionCommandePageModule)
  },
  {
    path: 'admin/menu-admin',
    loadChildren: () => import('./pages/admin/menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
