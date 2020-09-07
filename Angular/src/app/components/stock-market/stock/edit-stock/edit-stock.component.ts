import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Stock } from '../stock';
import { StockExchange } from '../../stock-exchange/stock-exchange';


@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {

  id: number;
  stock: Stock = new Stock();
  constructor(private route: ActivatedRoute, private stockService: StockExchangeService, private router: Router) { }

  ngOnInit(): void {
    this.stock.stockExchange = new StockExchange();
    this.id = this.route.snapshot.params['id'];
    console.log(this.stock);
    this.stockService.getStock(this.id)
      .subscribe(data => {
        Object.assign(this.stock, data);
        console.log(this.stock);
      }, error => console.log(error));
  }

  updateCompany() {
    this.stockService.updateStock(this.id, this.stock)
      .subscribe(data => {
        console.log(data);
        this.stock = new Stock();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCompany();
  }

  gotoList() {
    this.router.navigate(['/stock-market/stock']);
  }

}