import { Component, OnInit } from '@angular/core';
import { StockExchangeList } from './stock-exchange-list';
import { StockExchange } from './stock-exchange';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.scss']
})
export class StockExchangeComponent implements OnInit {


  stockExchange: StockExchange = new StockExchange(); 
  stockExchangeUrl: string = "http://localhost:8083/stockexchanges/";
  stockExchanges: StockExchangeList = new StockExchangeList();
  response: any;

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
  }

  addStockExchange(){
    console.log(this.stockExchange);
    this.http.post<StockExchange>(this.stockExchangeUrl, this.stockExchange)
    .subscribe(response => this.response = response);
    console.log(this.response);
  }

  getStockExchanges(){
    this.http.get(this.stockExchangeUrl)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
