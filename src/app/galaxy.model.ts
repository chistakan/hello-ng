export declare module Galaxy {

    export interface Result {
        id: number;
        info: string;
        symbol: string;
    }

    export interface MarketSymbols {
        error: number;
        result: Result[];
    }

}
