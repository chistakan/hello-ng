import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // this.loading.open()
    this.productsService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        // this.popuperr.open()
        console.log('GetProducts Error', error);
      }, () => {
        // this.loading.open()
        console.log('GetProducts Complete');
      });
  }

  onNotify(product: Product) {
    window.alert('Notified!!! Prodoct price is '+ product.price);
  }

}
