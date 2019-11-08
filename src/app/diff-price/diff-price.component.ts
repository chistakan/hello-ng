import { Component, OnInit } from '@angular/core';
import { GalaxyService } from '../galaxy.service';
import { DatePipe } from '@angular/common';
import { GalaxyMarket } from '../galaxy.model';

@Component({
  selector: 'app-diff-price',
  templateUrl: './diff-price.component.html',
  styleUrls: ['./diff-price.component.css']
})
export class DiffPriceComponent implements OnInit {

  servertime: number;
  strservertime: string;
  ticker: GalaxyMarket.Ticker;
  date: Date;
  
  constructor(
    private galaxyService: GalaxyService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
  }

  getMarketTicker() {
    this.galaxyService.getMarketTicker().subscribe((ticker: GalaxyMarket.Ticker) => {
      this.ticker = ticker;
    });
  }

  getServerTime() {
    this.galaxyService.getServerTime().subscribe((servertime: number) => {
      this.servertime = servertime;
      this.date = new Date(this.servertime*1000);
      // this.strservertime = this.datepipe.transform(this.date, 'yyyy-MM-dd').toString();
      // console.log(this.datepipe.transform(this.date,"dd-MM-yyyy"));
      this.strservertime = this.datepipe.transform(this.date,"H:mm:ss");
    });
  }
}
