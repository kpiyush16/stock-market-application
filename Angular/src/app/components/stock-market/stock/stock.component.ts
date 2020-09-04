import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockList } from './stock-list';
import { StockExchangeList } from '../stock-exchange/stock-exchange-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  stock: Stock = new Stock();
  response: any;
  
  // registerForm: FormGroup;
  isAddMode: boolean = false;
  isEditMode: boolean = false;
  isImportMode: boolean = false;
  
  stockUrl: string = "http://localhost:8083/stocks/";
  stockExchangeUrl: string = "http://localhost:8083/stockexchanges/";

  stockExchanges: StockExchangeList = new StockExchangeList();
  stockList: StockList = new StockList();
  // private stockService: StockExchangeService;
  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.http.get(this.stockExchangeUrl + "initialize");
    this.http.get(this.stockExchangeUrl)
    .subscribe(response => Object.assign(this.stockExchanges, response));
    console.log(this.stockExchanges);

    this.http.get(this.stockUrl)
    .subscribe(response => Object.assign(this.stockList, response));
    console.log(this.stockList);
  }

  toggleAddMode() {
    this.isAddMode = true;
    this.isEditMode = false;
    this.isImportMode = false;
  }
  
  toggleEditMode() {
    this.isAddMode = false;
    this.isEditMode = true;
    this.isImportMode = false;
  }
  toggleImportMode() {
    this.isAddMode = false;
    this.isEditMode = false;
    this.isImportMode = true;
  }

  addStock(){
    console.log(this.stock);
    this.http.post<Stock>(this.stockUrl, this.stock)
    .subscribe(response => this.response = response);
    console.log(this.response);
  }

  getStocks(){
    this.http.get(this.stockUrl)
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }

  deleteStock(id: number) {
    const user = this.stockList['stockList'].find(x => x.id === id);
    // user.isDeleting = true;
    this.http.delete(this.stockUrl+"/{id}")
        .subscribe(() => this.stockList['stockList'] = this.stockList['stockList'].filter(x => x.id !== id));
  }

}
