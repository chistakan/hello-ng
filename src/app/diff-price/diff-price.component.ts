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
  timeLeft: number = 60;
  interval;
  
  constructor(
    private galaxyService: GalaxyService,
    private datepipe: DatePipe
  ) { }

  ngOnInit() {
    this.getServerTime();
    this.getMarketTicker();
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
}
