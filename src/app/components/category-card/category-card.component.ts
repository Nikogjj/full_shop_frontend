import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
  route: string;
  isPromo?: boolean;
  promoText?: string;
}

@Component({
  selector: 'app-category-card',
//   standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() category!: Category;

    // category: Category = input<Category>();
}
