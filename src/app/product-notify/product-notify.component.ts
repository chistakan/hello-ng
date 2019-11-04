import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-notify',
  templateUrl: './product-notify.component.html',
  styleUrls: ['./product-notify.component.css']
})
export class ProductNotifyComponent implements OnInit {

  @Input() product: Product;
  @Output() notify: EventEmitter<Product> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
