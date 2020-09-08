import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockList } from './stock-list';
import { StockExchangeList } from '../stock-exchange/stock-exchange-list';
import { HttpClient } from '@angular/common/http';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  stock: Stock = new Stock();
  response: any;
  isDeleting: boolean = false;

  stockUrl: string = "http://localhost:8083/stocks/";
  stockExchangeUrl: string = "http://localhost:8083/stockexchanges/";

  stockExchanges: StockExchangeList = new StockExchangeList();
  stockList: StockList = new StockList();
  // private stockService: StockExchangeService;
  constructor(private http: HttpClient, private stockService: StockExchangeService,  private router: Router) { }
  

  ngOnInit() {
    this.stockService.getStocks()
    .subscribe(response => Object.assign(this.stockList, response));
    console.log(this.stockList);
  }

  updateStock(id: number) {
    this.router.navigate(['stock-market/stock/update-stock', id]);
  }

  deleteStock(id: number) {
    const user = this.stockList['stockList'].find(x => x.id === id);
    this.isDeleting = true;

    this.stockService.deleteStock(id)
        .subscribe(() => this.stockList['stockList'] = this.stockList['stockList'].filter(x => x.id !== id));
    this.isDeleting = false;
  }

}
