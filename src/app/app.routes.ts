import { Routes } from '@angular/router';

import { Home } from './page/home/home';
import { Artisans } from './page/artisans/artisans';
import { ArtisanDetail } from './page/artisan-detail/artisan-detail';
import { NotFound } from './page/not-found/not-found';

export const routes: Routes = [

  /* Accueil */
  {
    path: '',
    component: Home
  },

  /* Liste artisans */
  {
    path: 'artisans',
    component: Artisans
  },

  /* Détail artisan */
  {
    path: 'artisan/:id',
    component: ArtisanDetail
  },

  /* Page introuvable */
  {
    path: '**',
    component: NotFound
  }

];