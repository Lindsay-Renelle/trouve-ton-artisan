import { Injectable } from '@angular/core';

/* Permet de faire des requêtes HTTP */
import { HttpClient } from '@angular/common/http';

/* Observable = données asynchrones */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ArtisansService {

  /* Constructeur */
  constructor(private http: HttpClient) {}

  /* Méthode qui récupère le JSON */
  getArtisans(): Observable<any> {

    return this.http.get('data/data.json');

  }

}