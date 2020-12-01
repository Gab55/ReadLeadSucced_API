import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./pages/catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },  {
    path: 'livre',
    loadChildren: () => import('./livre/livre.module').then( m => m.LivrePageModule)
  },
  {
    path: 'detail-livre',
    loadChildren: () => import('./detail-livre/detail-livre.module').then( m => m.DetailLivrePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
