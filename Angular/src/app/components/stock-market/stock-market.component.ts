import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from '../../services/stock-exchange.service'
import { Stock } from './stock';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { StockExchange } from './stock-exchange';
import { StockExchangeList } from "./stock-exchange-list";
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent implements OnInit {

  id: string;
  isAddMode: boolean = true;
  loading = false;
  submitted = false;
  
  stock: Stock = new Stock();
  response: any;
  
  registerForm: FormGroup;
  
  stockUrl: string = "http://localhost:8083/stocks/";
  stockExchangeUrl: string = "http://localhost:8083/stockexchanges/";

  stockExchanges: StockExchangeList = new StockExchangeList();

  private stockService: StockExchangeService;
  constructor(private http: HttpClient) { }
  

  ngOnInit() {
    this.http.get(this.stockExchangeUrl + "initialize");
    this.http.get(this.stockExchangeUrl)
    .subscribe(response => Object.assign(this.stockExchanges, response));
    console.log(this.stockExchanges)
  }

  toggleMode() {
    this.isAddMode = !this.isAddMode;
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

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  //     // display form values on success
  //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  // }

  // onReset() {
  //     this.submitted = false;
  //     this.registerForm.reset();
  // }

}
