import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  // Étapes affichées dans la page
  etapes = [
    { id: 1, texte: "Choisir la catégorie d’artisanat dans le menu" },
    { id: 2, texte: "Choisir un artisan" },
    { id: 3, texte: "Le contacter via le formulaire de contact" },
    { id: 4, texte: "Une réponse sera apportée sous 48h" },
  ];

  // Texte saisi dans la barre de recherche
  termeRecherche = "";

  // Action du bouton "Rechercher"
  rechercher() {
    console.log("Recherche :", this.termeRecherche);
  }
}
