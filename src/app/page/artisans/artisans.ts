import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artisan } from '../../models/artisan';
import { ArtisansService } from '../../services/artisans-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artisans.html',
  styleUrls: ['./artisans.scss'],
})
export class Artisans implements OnInit {
    // terme tapé dans la barre de recherche
    termeRecherche: string = '';

    // liste filtrée
    artisansFiltres: Artisan[] = [];  

  /* Liste des artisans récupérés depuis le JSON */
  artisans: Artisan[] = [];

  constructor(
    /* Service permettant de récupérer les données */
    private artisansService: ArtisansService,

    /* Router pour naviguer vers la page détail */
    private router: Router
  ) {}

  /* Fonction exécutée au chargement du composant */
  ngOnInit(): void {

    /* Appel du service pour récupérer les artisans */
    this.artisansService.getArtisans().subscribe((data) => {

      /* Mise à jour de la liste des artisans */
      this.artisans = data;
      this.artisansFiltres = data;

      console.log('Artisans chargés :', this.artisans);
    });
  }

  /* Fonction appelée au clic sur une carte artisan */
  goToDetail(id: string) {

    /* Redirection vers la page détail de l'artisan */
    this.router.navigate(['/artisan', id]);
  }

  /*Filtrage en temps réel */
  rechercher() {
    const terme = this.termeRecherche.toLowerCase();

    this.artisansFiltres = this.artisans.filter(a =>
      a.name.toLowerCase().includes(terme) ||
      a.specialty.toLowerCase().includes(terme) ||
      a.location.toLowerCase().includes(terme) ||
      a.category.toLowerCase().includes(terme)
    );
  }

}
