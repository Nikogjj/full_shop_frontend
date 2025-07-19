import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  // État d'expansion des filtres
  filtersExpanded = false;

  // Catégories disponibles
  categories = [
    { id: 'maillots', name: 'Maillots', selected: false },
    { id: 'chaussures', name: 'Chaussures', selected: false },
    { id: 'accessoires', name: 'Accessoires', selected: false },
    { id: 'equipements', name: 'Équipements', selected: false }
  ];

  // Filtres de prix
  priceFilter = {
    min: 0,
    max: 500,
    sort: '' // 'asc' ou 'desc'
  };

  // Filtre alphabétique
  alphabeticalSort = ''; // 'asc' ou 'desc'

  // Terme de recherche
  searchTerm = '';

  toggleFilters(): void {
    this.filtersExpanded = !this.filtersExpanded;
  }

  onCategoryChange(categoryId: string): void {
    const category = this.categories.find(cat => cat.id === categoryId);
    if (category) {
      category.selected = !category.selected;
    }
    this.applyFilters();
  }

  onPriceChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  clearAllFilters(): void {
    this.categories.forEach(cat => cat.selected = false);
    this.priceFilter = { min: 0, max: 500, sort: '' };
    this.alphabeticalSort = '';
    this.searchTerm = '';
    this.applyFilters();
  }

  private applyFilters(): void {
    // Ici vous pourrez émettre les filtres vers le composant parent
    console.log('Filtres appliqués:', {
      categories: this.categories.filter(cat => cat.selected).map(cat => cat.id),
      priceRange: { min: this.priceFilter.min, max: this.priceFilter.max },
      priceSort: this.priceFilter.sort,
      alphabeticalSort: this.alphabeticalSort,
      searchTerm: this.searchTerm
    });
  }
}
