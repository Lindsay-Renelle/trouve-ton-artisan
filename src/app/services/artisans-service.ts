import { Injectable } from '@angular/core';

/* Requêtes HTTP */
import { HttpClient } from '@angular/common/http';

/* Observable */
import { Observable } from 'rxjs';

/* Modèle Artisan */
import { Artisan } from '../models/artisan';

@Injectable({
  providedIn: 'root',
})

export class ArtisansService {

  /* Injection HttpClient */
  constructor(private http: HttpClient) {}

  /* Récupération du JSON */
  getArtisans(): Observable<Artisan[]> {

    return this.http.get<Artisan[]>('data/data.json');

  }

}