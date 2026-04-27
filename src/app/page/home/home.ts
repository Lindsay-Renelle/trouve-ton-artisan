import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

    etapes = [
      { id: 1, texte: "Choisir la catégorie d’artisanat dans le menu" },
      { id: 2, texte: "Choisir un artisan" },
      { id: 3, texte: "Le contacter via le formulaire de contact" },
      { id: 4, texte: "Une réponse sera apportée sous 48h" },
    ];
  
    termeRecherche = "";
  
    rechercher() {
      console.log("Recherche :", this.termeRecherche);
    }
}
