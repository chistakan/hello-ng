import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService, Shipping } from '../cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[];
  shippings: Shipping[];
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


  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    // this.checkoutForm.reset();
  }
}
