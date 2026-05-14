import { Routes } from '@angular/router';

export const routes: Routes = [

  /* Accueil */
  {
    path: '',
    loadComponent: () =>
      import('./page/home/home').then(m => m.Home)
  },

  /* Liste artisans */
  {
    path: 'artisans',
    loadComponent: () =>
      import('./page/artisans/artisans').then(m => m.Artisans)
  },

  /* Détail artisan */
  {
    path: 'artisan/:id',
    loadComponent: () =>
      import('./page/artisan-detail/artisan-detail').then(m => m.ArtisanDetail)
  },

  /* Page introuvable */
  {
    path: '**',
    loadComponent: () =>
      import('./page/not-found/not-found').then(m => m.NotFound)
  }

];
