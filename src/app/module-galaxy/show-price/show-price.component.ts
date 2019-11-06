import { Component, OnInit } from '@angular/core';
import { CartService, Shipping, Servertime } from '../../cart.service';
import { Galaxy } from '../../galaxy.model';

@Component({
  selector: 'app-show-price',
  templateUrl: './show-price.component.html',
  styleUrls: ['./show-price.component.css']
})
export class ShowPriceComponent implements OnInit {

  servertime: string;
  token: Galaxy.MarketSymbols;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getServerTime();
    this.getMarketSymbols();
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

  getPrice() {
    // this.cartService.getShipping().subscribe((shippings: Shipping[]) => {
    //   this.shippings = shippings;
    // });
  }
}
