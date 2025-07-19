import { Injectable } from '@angular/core';
import { ResponseGetProductById } from '../interfaces/response-get-product-by-id';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProductById(id: number) {
    return new Promise <ResponseGetProductById>((resolve, reject) => {
      fetch("http://localhost:8000/api/get_product_by_id/"+id)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => {
          console.error("Error fetching product:", error);
          reject(error)});
    });
  }
}
