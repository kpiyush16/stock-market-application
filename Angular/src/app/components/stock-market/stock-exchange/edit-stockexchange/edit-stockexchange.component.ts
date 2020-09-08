import { Component, OnInit } from '@angular/core';
import { StockExchange } from '../stock-exchange';
import { ActivatedRoute, Router } from '@angular/router';
import { StockExchangeService } from 'src/app/services/stock-exchange.service';

@Component({
  selector: 'app-edit-stockexchange',
  templateUrl: './edit-stockexchange.component.html',
  styleUrls: ['./edit-stockexchange.component.scss']
})
export class EditStockexchangeComponent implements OnInit {

  id: number;
  stockExchange: StockExchange = new StockExchange();
  constructor(private route: ActivatedRoute, private stockService: StockExchangeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.stockExchange);
    this.stockService.getStockExchange(this.id)
      .subscribe(data => {
        Object.assign(this.stockExchange, data);
        console.log(this.stockExchange);
      }, error => console.log(error));
  }

  updateStockExchange() {
    this.stockService.updateStockExchange(this.id, this.stockExchange)
      .subscribe(data => {
        console.log(data);
        this.stockExchange = new StockExchange();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStockExchange();
  }

  gotoList() {
    this.router.navigate(['/stock-market/stock-exchange']);
  }

}
