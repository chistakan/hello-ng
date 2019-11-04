import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      description: '',
      price: 0
    });
  }

  ngOnInit() {
  }

  onSubmit(product) {
    if (!product.name) {
      return;
    }
    if (!product.description) {
      return;
    }
    if (!product.price) {
      return;
    }
    this.productsService.createProduct(product).subscribe(() => {
      console.log('create success');
      this.router.navigate(['/']);
    });
  }
}
