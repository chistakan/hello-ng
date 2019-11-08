import { Component, OnInit } from '@angular/core';
import { GalaxyService } from '../../galaxy.service';
import { GalaxyMarket } from '../../galaxy.model';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-show-price',
  templateUrl: './show-price.component.html',
  styleUrls: ['./show-price.component.css']
})
export class ShowPriceComponent implements OnInit {

  servertime: number;
  strservertime: string;
  ticker: GalaxyMarket.Ticker;
  symbols: GalaxyMarket.Symbols;
  date: Date;
  timeLeft: number = 60;
  interval;

  constructor(
    private galaxyService: GalaxyService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.getServerTime();
    // this.getMarketSymbols();
    this.getMarketTicker();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.getServerTime();
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
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

  getMarketSymbols() {
    this.galaxyService.getMarketSymbols().subscribe((symbols: GalaxyMarket.Symbols) => {
      this.symbols = symbols;
    });
  }

  getMarketTicker() {
    this.galaxyService.getMarketTicker().subscribe((ticker: GalaxyMarket.Ticker) => {
      this.ticker = ticker;
    });
  }

}
