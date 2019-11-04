import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = '/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}?id=${id}`);
  }

  createProduct(product: Product) {
    const body = {
      name: product.name,
      price: product.price,
      description: product.description
    };
    return this.http.post(this.url, body);
  }

  updateProduct(product: Product) {
    const body = {
      name: product.name,
      price: product.price,
      description: product.description
    };
    return this.http.patch(`${this.url}?id=${product._id}`, body);
  }

  deleteProductById(id: string) {
    return this.http.delete(`${this.url}?id=${id}`);
  }
}
