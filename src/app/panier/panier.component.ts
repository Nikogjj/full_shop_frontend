import { Component, inject } from '@angular/core';
import { ProductPanierCardComponent } from '../components/product-panier-card/product-panier-card.component';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  imports: [ProductPanierCardComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  panierService = inject(PanierService);


  // A CHANGER PLUS TARD CAR LA CEST DES FAUX PRODUITS
  ngOnInit() {
    this.panierService.addIdProductToLocalStorage(1, 2);
    this.panierService.addIdProductToLocalStorage(1, 3);
    this.panierService.addIdProductToLocalStorage(1, 1);
    this.panierService.addIdProductToLocalStorage(1, 5);
    this.panierService.addIdProductToLocalStorage(1, 4);
    console.log(this.panierService.getPanierFromLocalStorage());
    // localStorage.setItem("Panier", JSON.stringify([1,2,3,4,5])); --- IGNORE ---
  }

  ngOnDestroy() {
    // Nettoyage si nécessaire
    this.panierService.deleteAllProductsFromLocalStorage();
  }

  test(){
    console.log(this.panierService.getPanierFromLocalStorage())
    console.log("test")
  }
}
