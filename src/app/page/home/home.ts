import { Component, OnInit } from '@angular/core';

/* Permet d'utiliser ngModel */
import { FormsModule } from '@angular/forms';

/* Directives Angular */
import { CommonModule } from '@angular/common';

/* Service des artisans */
import { ArtisansService } from '../../services/artisans-service';

@Component({
  selector: 'app-home',
  standalone: true,

  /* Modules utilisés dans le composant */
  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './home.html',
  styleUrl: './home.scss'
})

/* Classe du composant Home */
export class Home implements OnInit {

  /* Tableau contenant tous les artisans */
  artisans: any[] = [];

  /* Tableau contenant les artisans du mois */
  artisansDuMois: any[] = [];

  /* Variable liée à la barre de recherche */
  termeRecherche = '';

  /* Tableau des étapes */
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

  /* Fonction exécutée au chargement de la page */
  ngOnInit(): void {

    /* Récupération des données du fichier JSON */
    this.artisansService.getArtisans().subscribe((data) => {

      /* Affichage des données dans la console */
      console.log(data);

      /* Stockage de tous les artisans */
      this.artisans = data;

      /* Récupération des artisans du mois */
      this.artisansDuMois = data.filter(
        (artisan: any) => artisan.top === true
      );

    });

  }

  /* Fonction de recherche */
  rechercher() {

    console.log(this.termeRecherche);

  }

}