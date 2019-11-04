import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productsService.getProductById(params.get('productId')).subscribe(
        (products: Product[]) => {
          if (products && products.length > 0) {
            this.product = products[0];
          }
        },
        (error) => {
          console.log('GetProductById Error', error);
        }, () => {
          console.log('GetProductById Complete');
        });
    });
  }

  add() {
    this.cartService.addToCart(this.product).subscribe(() => {
      window.alert('Your product has been added to the cart!!');
    });
  }
}
