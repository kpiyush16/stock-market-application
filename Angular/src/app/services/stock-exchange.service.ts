import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Stock } from '../components/stock-market/stock'

@Injectable({
  providedIn: 'root'
})
export class StockExchangeService {
  constructor(private http: HttpClient) { }
  stockUrl: "http://localhost:8083/stocks/";

  addStock(stock: Stock) {
    return this.http.post<Stock>(this.stockUrl, stock);
    // .pipe(catchError(this.handleError('addHero', stock)));
  }

  getStocks() {
    return this.http.get(this.stockUrl);
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
