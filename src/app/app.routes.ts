import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Artisans } from './page/artisans/artisans';
import { ArtisanDetail } from './page/artisan-detail/artisan-detail';
import { NotFound } from './page/not-found/not-found';



export const routes: Routes = [
    { path: ``,component: Home},
    { path: `artisans`,component: Artisans},
    { path: ``,component: ArtisanDetail},
    { path: ``,component: NotFound}
];
