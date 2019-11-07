import { GalaxyMarket } from './galaxy.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GalaxyService {

    // Symbols: GalaxyMarket.Symbols;

    private url_bitkub_api = 'https://api.bitkub.com/api';

    constructor(private http: HttpClient){

    }

    getServerTime(): Observable<any> {
        const url = '/servertime';
        return this.http.get(this.url_bitkub_api + url);
    }   

    getMarketSymbols(): Observable<GalaxyMarket.Symbols> {
        const url = '/market/symbols';
        return this.http.get<GalaxyMarket.Symbols>(this.url_bitkub_api + url);
    }

    getMarketTicker(): Observable<GalaxyMarket.Ticker> {
        const url = '/market/ticker';
        return this.http.get<GalaxyMarket.Ticker>(this.url_bitkub_api + url);
    }

    // getMarketTrades(): Observable<GalaxyMarket.Trades> {
    //     const url = '/market/trades';
    //     return this.http.get<GalaxyMarket.Trades>(this.url_bitkub_api + url);
    // }
}

export class Servertime {
  timestamp: string;
}