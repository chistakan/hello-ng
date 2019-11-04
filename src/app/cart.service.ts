import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    const url = '/api/carts';
    const body = {
      name: product.name,
      price: product.price,
      description: product.description
    };
    return this.http.post(url, body);
  }

  getItems(): Observable<Product[]> {
    const url = '/api/carts';
    return this.http.get<Product[]>(url);
  }

  clearCart() {
    const url = '/api/carts';
    return this.http.delete(url);
  }

  getShipping(): Observable<Shipping[]> {
    const url = 'http://5d971e419937f40014b68723.mockapi.io/api/shipping';
    return this.http.get<Shipping[]>(url);
  }
}

export class Shipping {
  type: string;
  price: number;
}
