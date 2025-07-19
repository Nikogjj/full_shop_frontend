import { Component } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FiltersComponent } from '../components/filters/filters.component';

@Component({
  selector: 'app-produits',
  imports: [ProductCardComponent, FiltersComponent],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {
  // Données de test pour les produits (à remplacer par un service plus tard)
  products = [
    {
      id: 1,
      name: 'Maillot Bayern Munich Domicile 2024',
      price: 89.99,
      image: '/bayern.jpg',
      category: 'maillots',
      description: 'Maillot officiel du Bayern Munich pour la saison 2024'
    },
    {
      id: 2,
      name: 'Crampons Nike Mercurial Vapor',
      price: 149.99,
      image: '/crampon.jpg',
      category: 'chaussures',
      description: 'Chaussures de football haute performance'
    },
    {
      id: 3,
      name: 'Ballon de Football Official',
      price: 29.99,
      image: '/foot2.jpeg',
      category: 'accessoires',
      description: 'Ballon de football officiel FIFA'
    },
    {
      id: 4,
      name: 'Maillot PSG Domicile 2024',
      price: 95.99,
      image: '/bayern.jpg',
      category: 'maillots',
      description: 'Maillot officiel du Paris Saint-Germain'
    },
    {
      id: 5,
      name: 'Crampons Adidas Predator',
      price: 179.99,
      image: '/crampon.jpg',
      category: 'chaussures',
      description: 'Chaussures de football avec technologie Predator'
    },
    {
      id: 6,
      name: 'Survêtement Nike Training',
      price: 89.99,
      image: '/foot2.jpeg',
      category: 'accessoires',
      description: 'Survêtement d\'entraînement professionnel'
    },
    {
      id: 7,
      name: 'Maillot Real Madrid Extérieur',
      price: 92.99,
      image: '/bayern.jpg',
      category: 'maillots',
      description: 'Maillot extérieur du Real Madrid'
    },
    {
      id: 8,
      name: 'Chaussettes de Football Pro',
      price: 15.99,
      image: '/crampon.jpg',
      category: 'accessoires',
      description: 'Chaussettes techniques pour footballeurs'
    },
    {
      id: 9,
      name: 'Gants de Gardien Adidas',
      price: 45.99,
      image: '/foot2.jpeg',
      category: 'accessoires',
      description: 'Gants de gardien de but professionnels'
    },
    {
      id: 10,
      name: 'Crampons Puma Future Z',
      price: 159.99,
      image: '/crampon.jpg',
      category: 'chaussures',
      description: 'Chaussures de football nouvelle génération'
    },
    {
      id: 11,
      name: 'Maillot Manchester United',
      price: 88.99,
      image: '/bayern.jpg',
      category: 'maillots',
      description: 'Maillot officiel de Manchester United'
    },
    {
      id: 12,
      name: 'Short de Football Nike',
      price: 35.99,
      image: '/foot2.jpeg',
      category: 'accessoires',
      description: 'Short de football léger et respirant'
    }
  ];
}
