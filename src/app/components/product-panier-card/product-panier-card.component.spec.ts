import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPanierCardComponent } from './product-panier-card.component';

describe('ProductPanierCardComponent', () => {
  let component: ProductPanierCardComponent;
  let fixture: ComponentFixture<ProductPanierCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPanierCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPanierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
