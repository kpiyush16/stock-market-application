import { StockExchange } from './stock-exchange';

export class Ipo {
    id:number;
    companyId:number;
    sharePrice:number;
	totalShares:number;
	openDateTime:any;
	closeDateTime:any;
	remarks:string;
	stockExchange:StockExchange;
}
