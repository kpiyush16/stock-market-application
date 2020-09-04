import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from '../../services/stock-exchange.service'
import { Stock } from './stock/stock';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { StockExchange } from './stock-exchange/stock-exchange';
import { StockExchangeList } from "./stock-exchange/stock-exchange-list";
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
  
  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

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
