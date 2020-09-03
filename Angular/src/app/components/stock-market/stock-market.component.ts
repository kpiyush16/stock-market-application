import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from '../../services/stock-exchange.service'
import { Stock } from './stock';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-market',
  templateUrl: './stock-market.component.html',
  styleUrls: ['./stock-market.component.scss']
})
export class StockMarketComponent implements OnInit {

  // form: FormGroup;
  id: string;
  isAddMode: boolean = true;
  loading = false;
  submitted = false;
  stockExchange: any;
  stock: Stock;
  response: any;
  // registerForm: FormGroup;
  private stockService: StockExchangeService;
  constructor() { }
  toggleMode() {
    this.isAddMode = !this.isAddMode;
  }
  addStock(){
    this.stockService
    .addStock(this.stock)
    .subscribe(response => this.response = response);
    console.log(this.response);
    ;
  }

  ngOnInit() {
      // this.registerForm = this.formBuilder.group({
      //     id: [0, Validators.required],
      //     openPrice: [0, Validators.required],
      //     closePrice: [0, Validators.required],
      //     // validates date format yyyy-mm-dd
      //     companyTurnover: [0],
      //     date: [],
      //     dateTime: [],
      //     companyId: [0, Validators.required],
      //     // acceptTerms: [false, Validators.requiredTrue]
      // });
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
