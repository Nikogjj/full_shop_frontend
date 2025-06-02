import { Component } from '@angular/core';
import { CarouselSlideComponent } from '../carousel-slide/carousel-slide.component';
import { CommonModule } from '@angular/common';
import { SlideHeroSection } from '../../../interfaces/slide-hero-section';

@Component({
  selector: 'app-carousel-hero-section',
  imports: [CarouselSlideComponent,CommonModule],
  templateUrl: './carousel-hero-section.component.html',
  styleUrl: './carousel-hero-section.component.css'
})
export class CarouselHeroSectionComponent {
  currentIndex = 0;
  slides : SlideHeroSection[] =[
    {
      imageUrl: 'bayern.jpg',
      titre: 'MAILLOTS 2025',
      text: 'Découvre les nouveaux modèles',
      buttonText: 'VOIR LA COLLECTION'
    },
    {
      imageUrl: 'dembele.jpg',
      titre: 'Maillots 2025',
      text: 'Découvre les nouveaux modèles',
      buttonText: 'VOIR LA COLLECTION'
    },
    {
      imageUrl: 'foot2.jpeg',
      titre: 'Maillots 2025',
      text: 'Découvre les nouveaux modèles',
      buttonText: 'VOIR LA COLLECTION'
    },
]

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
