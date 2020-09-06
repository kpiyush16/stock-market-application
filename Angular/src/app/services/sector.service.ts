import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sector } from '../models/sector';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private sectorUrl: string;

  constructor(private http: HttpClient) { 
    //this.sectorUrl = 'http://localhost:8989/company/sectors';
    this.sectorUrl = 'http://localhost:8082/sectors';
  }

  public findAll(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.sectorUrl);
  }

  public save(sector: Sector) {
    return this.http.post<Sector>(this.sectorUrl, sector);
  }

  deleteSector(id: number): Observable<any> {
    return this.http.delete(`${this.sectorUrl}/${id}`, { responseType: 'text' });
  }

  getSector(id: number): Observable<any> {
    return this.http.get(`${this.sectorUrl}/${id}`);
  }

  updateSector(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.sectorUrl}/${id}`, value);
  }

}
