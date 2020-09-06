import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyModel } from '../models/company-model';
import { CompanyBod } from '../models/company-bod'
import { Sector } from '../models/sector'
import { Observable} from 'rxjs';
import { StockExchange } from '../models/stock-exchange'


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyUrl: string;
  private seUrl: string;
 
  constructor(private http: HttpClient) {
    //this.companyUrl = 'http://localhost:8989/company/companies';
    this.companyUrl = 'http://localhost:8082/companies';
    this.seUrl = 'http://localhost:8083/stockexchanges';
  }
 
  //array1: Array<CompanyModel>;

  public findAll(): Observable<CompanyModel[]> {
    return this.http.get<CompanyModel[]>(this.companyUrl);
  }

  public findAll1(id: number): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(`${this.companyUrl}/${id}/${'stockexchanges'}`);
  }

  public findAll2(): Observable<StockExchange[]> {
    return this.http.get<StockExchange[]>(this.seUrl);
  }

  public save(company: CompanyModel) {
    return this.http.post<CompanyModel>(this.companyUrl, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.companyUrl}/${id}`, { responseType: 'text' });
  }

  AddCompanySector(id: number, sector: Sector): Observable<any> {
    return this.http.post<Sector>(`${this.companyUrl}/${id}/${'sectors'}`, sector);
  }

  DeleteCompanySector(id: number, id1: number): Observable<any> {
    return this.http.delete(`${this.companyUrl}/${id}/${'sectors'}/${id1}/`, { responseType: 'text' });
  }

  AddCompanyBOD(id: number, company: CompanyBod): Observable<any> {
    return this.http.post<CompanyBod>(`${this.companyUrl}/${id}/${'boardofdirectors'}`, company);
  }

  DeleteCompanyBOD(id: number, company: CompanyBod): Observable<any> {
    return this.http.delete(`${this.companyUrl}/${id}/${'boardofdirectors'}/${company}`, { responseType: 'text' });
  }

  AddCompanyStockExchange( id: number, id1: number): Observable<any> {
    return this.http.post<StockExchange>(`${this.companyUrl}/${id}/${'stockexchanges'}`, id1);
  }

  DeleteCompanyStockExchange(id: number, id1: number): Observable<any> {
    return this.http.delete(`${this.companyUrl}/${id}/${'stockexchanges'}/${id1}/`, { responseType: 'text' });
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.companyUrl}/${id}`);
  }

  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.companyUrl}/${id}`, value);
  }

}
