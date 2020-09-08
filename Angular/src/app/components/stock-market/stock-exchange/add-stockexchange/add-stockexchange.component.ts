import { Component, OnInit } from '@angular/core';
import { StockExchange } from '../stock-exchange';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';
import { StockExchangeList } from '../stock-exchange-list';

@Component({
  selector: 'app-add-stockexchange',
  templateUrl: './add-stockexchange.component.html',
  styleUrls: ['./add-stockexchange.component.scss']
})
export class AddStockexchangeComponent implements OnInit {

  stockExchange: StockExchange;
  stochExchanges: StockExchangeList = new StockExchangeList();
  response: any;
  constructor(private stockService: StockExchangeService, private router: Router) {
    this.stockExchange = new StockExchange();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stockService.addStockExchange(this.stockExchange)
    .subscribe(response => this.gotoStockExchangeList());
  }
 
  gotoStockExchangeList() {
    this.router.navigate(['/stock-market/stock-exchange']);
  }
}
