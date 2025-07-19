import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductPanierLocal } from '../interfaces/product-panier-local';
import { ProductPanierCardComponent } from '../components/product-panier-card/product-panier-card.component';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier : ProductPanierLocal[] = [];
  totalPrice: number = 0;

  /**
   * Permet de récupérer le panier depuis la base de données
   * si un client est connecté sur le site
   * @returns Un tableau de produits
   */
  getPanierFromBD(): Product[] {
    return [];
  }
  /**
   * Permet de récupérer le panier depuis le localStorage
   * si un client n'est pas encore connecté sur le site
   * @returns Un tableau d'ID de produits
   */
  getPanierFromLocalStorage(): ProductPanierLocal[] {
    const panier = localStorage.getItem("panier");
    if (panier) {
      this.panier = JSON.parse(panier);
      return this.panier;
    }
    else{
      this.panier = [];
      return this.panier;
    }
  }
  addIdProductToLocalStorage(id: number, quantity: number): void {
    const newProductPanier: ProductPanierLocal = {
      id: id,
      quantity: quantity,
      price: 0 // Le prix sera calculé plus tard
    };
    const panier = this.getPanierFromLocalStorage();
    this.panier.push(newProductPanier);
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }

  /**
   * Supprime un produit du panier dans le local storage
   * @param id 
   */
  deleteIdProductFromLocalStorage(id: number): void {
    const panier = this.getPanierFromLocalStorage();
    const updatedPanier = panier.filter(product => product.id !== id);
    localStorage.setItem("panier", JSON.stringify(updatedPanier));
  }

  deleteAllProductsFromLocalStorage(): void {
    localStorage.removeItem("panier");
    this.panier = [];
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }
  /**
   * Supprime un produit du panier dans le local storage
   * @param id 
   */
  removeProductFromLocalPanier(id : number){
    const panier = this.getPanierFromLocalStorage();
    const updatedPanier = panier.filter(product => product.id !== id);
    localStorage.setItem("panier", JSON.stringify(updatedPanier));
  }
  /**
   * Supprime un produit dans le panier de la BDD
   */
  removeProductFromBDDPanier(id : number){
    // la je mettrais mon fetch
  }

  addPriceToTotalPrice(price : number){
    this.totalPrice += price;
  }

  removePriceFromTotalPrice(price : number){
    this.totalPrice -= price;
  }

}
