import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockList } from './stock-list';
import { StockExchangeList } from '../stock-exchange/stock-exchange-list';
import { HttpClient } from '@angular/common/http';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  
  stock: Stock = new Stock();
  response: any;
  isDeleting: boolean = false;
  isAdmin: boolean;

  stockExchanges: StockExchangeList = new StockExchangeList();
  stockList: StockList = new StockList();

  constructor(private auth: AuthenticationService, private stockService: StockExchangeService,  private router: Router) { 
    this.isAdmin = this.auth.isAdminValue;
  }
  

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
