import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent, Category } from '../category-card/category-card.component';
import { ProductCardComponent, Product } from '../product-card/product-card.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent, ProductCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  @Input() title: string = '';
  @Input() componentType: 'category' | 'product' = 'category';


  currentIndex = 0;
  itemsPerView = 3;

  // Données mock temporaires - à remplacer par des services plus tard
  mockCategories: Category[] = [
    {
      id: 1,
      name: 'Chaussures',
      image: 'crampon.jpg',
      description: 'Crampons et chaussures de football pour tous les terrains',
      route: '/chaussures',
      isPromo: true,
      promoText: 'NOUVEAU'
    },
    {
      id: 2,
      name: 'Maillots',
      image: 'bayern.jpg',
      description: 'Maillots officiels des plus grands clubs européens',
      route: '/maillots',
      isPromo: false
    },
    {
      id: 3,
      name: 'Équipements',
      image: 'foot2.jpeg',
      description: 'Ballons, cônes, et tout l\'équipement d\'entraînement',
      route: '/equipements',
      isPromo: false
    },
    {
      id: 4,
      name: 'Training',
      image: 'dembele.jpg',
      description: 'Vêtements et accessoires pour l\'entraînement',
      route: '/training',
      isPromo: true,
      promoText: '-20%'
    },
    {
      id: 5,
      name: 'Lifestyle',
      image: 'foot2.jpeg',
      description: 'Produits lifestyle et accessoires supporters',
      route: '/lifestyle',
      isPromo: false
    },
    {
      id: 6,
      name: 'Soldes',
      image: 'crampon.jpg',
      description: 'Profitez de nos meilleures offres et promotions',
      route: '/soldes',
      isPromo: true,
      promoText: 'SOLDES -50%'
    }
  ];

  mockProducts: Product[] = [
    {
      id: 1,
      name: 'Nike Mercurial Vapor 15',
      price: 89.99,
      originalPrice: 129.99,
      image: '/crampon.jpg',
      category: 'Chaussures',
      isOnSale: true,
      rating: 5
    },
    {
      id: 2,
      name: 'Maillot Bayern Munich 2024',
      price: 79.99,
      image: '/bayern.jpg',
      category: 'Maillots',
      isOnSale: false,
      rating: 4
    },
    {
      id: 3,
      name: 'Ballon de Football Nike',
      price: 24.99,
      image: '/foot2.jpeg',
      category: 'Équipement',
      isOnSale: false,
      rating: 4
    },
    {
      id: 4,
      name: 'Survêtement Dembélé PSG',
      price: 65.99,
      originalPrice: 89.99,
      image: '/dembele.jpg',
      category: 'Training',
      isOnSale: true,
      rating: 5
    },
    {
      id: 5,
      name: 'Chaussettes de Football',
      price: 12.99,
      image: '/crampon.jpg',
      category: 'Équipement',
      isOnSale: false,
      rating: 3
    },
    {
      id: 6,
      name: 'Gants de Gardien Adidas',
      price: 45.99,
      originalPrice: 59.99,
      image: '/foot2.jpeg',
      category: 'Équipement',
      isOnSale: true,
      rating: 4
    }
  ];

  ngOnInit() {
    this.updateItemsPerView();
  }

  // Écouteur d'événement pour ajuster le nombre d'éléments visibles en fonction de la taille de la fenêtre
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateItemsPerView();
  }

  /**
   * Met à jour le nombre d'éléments visibles en fonction de la taille de la fenêtre
   */
  updateItemsPerView() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 768) {
        this.itemsPerView = 1;
      } else if (window.innerWidth <= 1024) {
        this.itemsPerView = 2;
      } else {
        this.itemsPerView = 3;
      }
    }
  }

  get maxIndex(): number {
    const totalItems = this.componentType === 'category' ? this.mockCategories.length : this.mockProducts.length;
    return Math.max(0, totalItems - this.itemsPerView);
  }

  get totalItems(): number {
    return this.componentType === 'category' ? this.mockCategories.length : this.mockProducts.length;
  }

  get canGoPrev(): boolean {
    return true; // Toujours possible avec le scroll infini
  }

  get canGoNext(): boolean {
    return true; // Toujours possible avec le scroll infini
  }

  /**
   * Permet de naviguer entre les cards du carousel avec scroll infini
   */
  prevSlide() {
    if (this.currentIndex === 0) {
      // Si on est au début, on va à la fin
      this.currentIndex = this.maxIndex;
    } else {
      this.currentIndex--;
    }
  }

  /**
   * Permet de naviguer entre les cards du carousel avec scroll infini
   */
  nextSlide() {
    if (this.currentIndex >= this.maxIndex) {
      // Si on est à la fin, on revient au début
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
  }

  /**
   * Permet de naviguer vers une card spécifique du carousel
   * @param index L'index de la card à afficher
   */
  goToSlide(index: number) {
    if (index >= 0 && index <= this.maxIndex) {
      this.currentIndex = index;
    }
  }

  get visibleIndicators(): number[] {
    const indicators = [];
    // Créer un indicateur pour chaque élément individuel
    for (let i = 0; i < this.totalItems; i++) {
      indicators.push(i);
    }
    return indicators;
  }

  isIndicatorActive(index: number): boolean {
    // Un indicateur est actif si l'élément correspondant est visible
    return index >= this.currentIndex && index < this.currentIndex + this.itemsPerView;
  }

  /**
   * Navigue vers un élément spécifique en cliquant sur son indicateur
   * @param elementIndex L'index de l'élément à afficher
   */
  goToElement(elementIndex: number) {
    // Calculer l'index de page qui permettra d'afficher cet élément
    const targetIndex = Math.max(0, Math.min(elementIndex, this.maxIndex));
    this.currentIndex = targetIndex;
  }
}
