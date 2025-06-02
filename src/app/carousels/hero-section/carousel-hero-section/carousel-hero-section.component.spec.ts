import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHeroSectionComponent } from './carousel-hero-section.component';

describe('CarouselHeroSectionComponent', () => {
  let component: CarouselHeroSectionComponent;
  let fixture: ComponentFixture<CarouselHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
