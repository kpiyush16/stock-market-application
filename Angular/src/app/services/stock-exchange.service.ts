import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Stock } from '../components/stock-market/stock/stock'
import { StockExchange } from '../components/stock-market/stock-exchange/stock-exchange';
import { StockExchangeList } from '../components/stock-market/stock-exchange/stock-exchange-list';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {
  constructor(private http: HttpClient) { }
  // stockUrl: "http://localhost:8083/stocks/";
  // stockExchangeUrl: "http://localhost:8083/stockexchanges/";

  addStocks(stocks: Stock[]){
    stocks.forEach(element => {
      this.http.post<Stock>(`${environment.backendUrl}/stock-exchange/stocks/`, element)
    });
  }
  addStock(stock: Stock) {
    return this.http.post<Stock>(`${environment.backendUrl}/stock-exchange/stocks/`, stock);
  }

  addStockExchange(stockExchange: StockExchange) {
    return this.http.post<StockExchange>(`${environment.backendUrl}/stock-exchange/stockexchanges`, stockExchange);
  }
  
  updateStock(id: number, value:any) {
    return this.http.put(`${environment.backendUrl}/stock-exchange/stocks/${id}`, value);
  }

  updateStockExchange(id: number, value:any) {
    return this.http.put(`${environment.backendUrl}/stock-exchange/stockexchanges/${id}`, value);
  }

  getStocks(){
    return this.http.get(`${environment.backendUrl}/stock-exchange/stocks`);
  }

  getStockExchanges() {
    return this.http.get(`${environment.backendUrl}/stock-exchange/stockexchanges`);
  }

  getStock(id: number): Observable<any>{
    return this.http.get(`${environment.backendUrl}/stock-exchange/stocks/${id}`);
  }

  getStockExchange(id: number) {
    return this.http.get(`${environment.backendUrl}/stock-exchange/stockexchanges/${id}`);
  }

  deleteStock(id: number) {
    return this.http.delete(`${environment.backendUrl}/stock-exchange/stocks/${id}`);
  }

  deleteStockExchange(id: number) {
    return this.http.delete(`${environment.backendUrl}/stock-exchange/stockexchanges/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
