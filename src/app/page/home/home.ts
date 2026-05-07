import { Component, OnInit } from '@angular/core';

/* Permet ngModel */
import { FormsModule } from '@angular/forms';

/* Directives Angular */
import { CommonModule } from '@angular/common';

/* Service artisans */
import { ArtisansService } from '../../services/artisans-service';

@Component({
  selector: 'app-home',

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home implements OnInit {

  /* Tableau des artisans */
  artisans: any[] = [];

  /* Barre de recherche */
  termeRecherche = '';

  /* Étapes */
  etapes = [
    {
      id: 1,
      texte: 'Choisir la catégorie d’artisanat dans le menu'
    },
    {
      id: 2,
      texte: 'Choisir un artisan'
    },
    {
      id: 3,
      texte: 'Le contacter via le formulaire de contact'
    },
    {
      id: 4,
      texte: 'Une réponse sera apportée sous 48h'
    }
  ];

  /* Constructeur */
  constructor(private artisansService: ArtisansService) {}

  /* Au chargement du composant */
  ngOnInit(): void {

    /* Récupération des données JSON */
    this.artisansService.getArtisans().subscribe((data) => {
      console.log(data);
      this.artisans = data;
    });

  }

  /* Fonction recherche */
  rechercher() {
    console.log(this.termeRecherche);
  }

}
