import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StockExchange } from '../../stock-exchange/stock-exchange';
import { StockExchangeList } from '../../stock-exchange/stock-exchange-list';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  stock: Stock;
  stochExchanges: StockExchangeList = new StockExchangeList();
  response: any;
  isAdmin: boolean;
  constructor(private auth: AuthenticationService, private stockService: StockExchangeService, private router: Router) {
    this.stock = new Stock();
    this.stock.stockExchange = new StockExchange();
    this.isAdmin = this.auth.isAdminValue;
  }

  ngOnInit(): void {
    this.stockService.getStockExchanges()
    .subscribe(response => {
      Object.assign(this.stochExchanges, response)
    });
    // console.log(this.stochExchanges);
  }

  onSubmit() {
    this.stockService.addStock(this.stock)
    .subscribe(response => this.gotoStockList());
  }
 
  gotoStockList() {
    this.router.navigate(['/stock-market/stock']);
  }
}
