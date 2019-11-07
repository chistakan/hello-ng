import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { GalaxyMarket } from './galaxy.model';
import { HttpClient ,HttpHeaders, HttpClientModule, HttpRequest, HttpParams ,  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { core } from '@angular/compiler';
import * as cors from "cors";
import { text } from 'body-parser';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // [x: string]: any;
  items: Product[] = [];
  token: GalaxyMarket.Symbols;
  

  constructor(private http: HttpClient) {
    // const url = 'https://api.bitkub.com/api/market/symbols';

    // http.head(url , { 
    //   headers : {
    //     'Access-Control-Allow-Origin' : 'https://api.bitkub.com',
    //     'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
    //     'Content-Type': 'application/json'
    //   },
    //   responseType : 'text'
    // })
  }

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
    console.log('getShipping' + url);
    return this.http.get<Shipping[]>(url);
  }

  getServerTime(): Observable<any> {
    const url = 'https://api.bitkub.com/api/servertime';
    return this.http.get(url);
  }

  getMarketSymbols(): Observable<GalaxyMarket.Symbols> {
    const url = 'https://api.bitkub.com/api/market/symbols';
    return this.http.get<GalaxyMarket.Symbols>(url);
  }
}

export class Shipping {
  type: string;
  price: number;
}
