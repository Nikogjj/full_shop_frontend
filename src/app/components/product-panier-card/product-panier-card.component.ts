import { Component, inject, input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { AuthService } from '../../services/auth.service';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-product-panier-card',
  templateUrl: './product-panier-card.component.html',
  styleUrls: ['./product-panier-card.component.css']
})
export class ProductPanierCardComponent {
    id = input(0);
    quantity = input(1);
    quantityValue = this.quantity();
    totalPrice = 0; // Variable pour stocker le prix total
    productToDisplay: Product = {
        id: 0,
        name: '',
        description: '',
        price: 0,
        categories: [],
        images: [],
        created_at: '',
        updated_at: ''
    };
    productsService = inject(ProductsService);
    authService = inject(AuthService)
    panierService = inject(PanierService);

    async ngOnInit() {
        this.quantityValue = this.quantity();

        this.productsService.getProductById(this.id())
        .then(data => {
            this.productToDisplay = data.product;
            // Je calcule le prix en fonction de la quantité
            this.calculatePrice();
            this.panierService.addPriceToTotalPrice(this.totalPrice);
        })
        .catch(error => {
            console.log(error)
        });
    }

    /**
     * Modifie la quantité du produit dans le panier
     * @param action string "plus" ou "moins"
     */
    modifyQuantity(action: "plus" | "moins") {
        if (action == "plus") {
            this.quantityValue = this.quantityValue + 1;
            this.panierService.addPriceToTotalPrice(this.productToDisplay.price);
        } else {
            if (this.quantityValue == 1) {
                // Supprimer le produit du panier
                if (this.authService.isConnected()) {
                    this.panierService.removeProductFromBDDPanier(this.productToDisplay.id);
                }
                else{
                    this.panierService.removeProductFromLocalPanier(this.productToDisplay.id);
                }
            }
            else{
                this.quantityValue = this.quantityValue - 1;
                this.calculatePrice();
                this.panierService.removePriceFromTotalPrice(this.productToDisplay.price);
            }
        }
    }

    calculatePrice() {
        this.totalPrice = this.productToDisplay.price * this.quantityValue;
        // return this.totalPrice;
    }
}
