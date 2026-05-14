import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArtisansService } from '../../services/artisans-service';
import { Artisan } from '../../models/artisan';

@Component({
  selector: 'app-artisan-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artisan-detail.html',
  styleUrls: ['./artisan-detail.scss'],
})

export class ArtisanDetail implements OnInit {

  // artisan affiché dans la page
  artisan!: Artisan; 

  constructor(
    // accès à l'ID dans l'URL
    private route: ActivatedRoute, 

    // accès aux données JSON
    private artisansService: ArtisansService 
  ) {}
  

  ngOnInit(): void {

    // ID récupéré depuis l'URL (ex : /artisan/3)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Recherche de l'artisan correspondant dans le JSON
    this.artisansService.getArtisans().subscribe((data) => {
      this.artisan = data.find(a => a.id === id.toString())!;
    });
  }
}