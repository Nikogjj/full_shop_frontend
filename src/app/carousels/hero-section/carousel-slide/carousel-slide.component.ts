import { Component, Input } from '@angular/core';
import { SlideHeroSection } from '../../../interfaces/slide-hero-section';

@Component({
  selector: 'app-carousel-slide',
  imports: [],
  templateUrl: './carousel-slide.component.html',
  styleUrl: './carousel-slide.component.css'
})
export class CarouselSlideComponent {
  // @Input() imageUrl!: string;
  // @Input() title!: string;
  // @Input() subtitle!: string;
  // @Input() buttonText: { text: string, link: string }[] = [];
  @Input() infoSlide! : SlideHeroSection;
}
