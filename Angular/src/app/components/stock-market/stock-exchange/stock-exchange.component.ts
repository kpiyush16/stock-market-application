import { Component, OnInit } from '@angular/core';
import { StockExchangeList } from './stock-exchange-list';
import { StockExchange } from './stock-exchange';
import { HttpClient } from '@angular/common/http';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.scss']
})
export class StockExchangeComponent implements OnInit {


  stockExchange: StockExchange = new StockExchange();
  response: any;
  // isDeleting: boolean = false;

  stockExchangeList: StockExchangeList = new StockExchangeList();
  constructor(private stockService: StockExchangeService,  private router: Router) { }
  

  ngOnInit() {
    this.stockService.getStockExchanges()
    .subscribe(response => Object.assign(this.stockExchangeList, response));
    console.log(this.stockExchangeList);
  }

  updateStockExchange(id: number) {
    this.router.navigate(['stock-market/stock-exchange/update-stockexchange', id]);
  }

  // // Deletion not permitted
  // deleteStockExchange(id: number) {
  //   const user = this.stockExchangeList['stockExchangeList'].find(x => x.id === id);
  //   this.isDeleting = true;

  //   this.stockService.deleteStockExchange(id)
  //       .subscribe(() => this.stockExchangeList['stockExchangeList'] = this.stockExchangeList['stockExchangeList'].filter(x => x.id !== id));
  //   this.isDeleting = false;
  // }

}
