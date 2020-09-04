import { StockExchange } from "./stock-exchange";

export class Stock {
    id: number;
    price: number;
    companyTurnover: number;
    date: Date;
    dateTime: any;
    companyId: number;
    stockExchange: StockExchange;
}
