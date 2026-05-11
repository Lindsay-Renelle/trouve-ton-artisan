import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Artisan } from '../../models/artisan';
import { ArtisansService } from '../../services/artisans-service';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artisans.html',
  styleUrls: ['./artisans.scss'],
})

export class Artisans implements OnInit {

  /* Tableau artisans */
  artisans: Artisan[] = [];

  /* Constructeur */
  constructor(private artisansService: ArtisansService) {}

  /* Chargement des artisans */
  ngOnInit(): void {

    console.log('ngOnInit fonctionne');

    this.artisansService.getArtisans().subscribe((data) => {

      console.log('DATA :', data);

      this.artisans = data;

      console.log('TABLEAU :', this.artisans);

    });

  }

}