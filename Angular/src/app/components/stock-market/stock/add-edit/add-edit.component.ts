import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { HttpClient } from '@angular/common/http';
import { StockPriceService } from 'src/app/services/stock-price.service';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';
import { StockExchange } from '../../stock-exchange/stock-exchange';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  stock: Stock;
  response: any;
  constructor(private http: HttpClient, private stockService: StockExchangeService, private router: Router) { 
    this.stock = new Stock();
    this.stock.stockExchange = new StockExchange();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stockService.addStock(this.stock)
    .subscribe(response => this.gotoStockList());
  }
 
  gotoStockList() {
    this.router.navigate(['/stock-market/stock']);
  }
}
