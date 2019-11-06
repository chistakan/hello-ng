import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Galaxy } from '../galaxy.model';
import { CartService, Shipping, Servertime } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[];
  token: Galaxy.MarketSymbols;
  shippings: Shipping[];
  servertime: string;
  public checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.cartService.getItems().subscribe((products: Product[]) => {
      this.items = products;
    });
    this.getShipping();
    this.getServerTime();
    this.getMarketSymbols();
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.cartService.getItems().subscribe((products: Product[]) => {
        this.items = products;
      });
    });
  }

  getShipping() {
    this.cartService.getShipping().subscribe((shippings: Shipping[]) => {
      this.shippings = shippings;
    });
  }

  getServerTime() {
    this.cartService.getServerTime().subscribe((servertime: string) => {
      this.servertime = servertime;
    });
  }
  
  getMarketSymbols() {
    this.cartService.getMarketSymbols().subscribe((token: Galaxy.MarketSymbols) => {
      this.token = token;
    });
  }


  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    // this.checkoutForm.reset();
  }
}
