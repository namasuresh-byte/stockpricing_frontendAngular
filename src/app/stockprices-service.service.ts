import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stockprices } from './stockprices';
import { Observable } from '../../node_modules/rxjs/Observable';

 
@Injectable()
export class StockpricesService {
 
  private stockpricesUrl: string;
 
  constructor(private http: HttpClient) {
    this.stockpricesUrl = 'http://localhost:8585/stockprices';
  }
 
  public findAll(): Observable<Stockprices[]> {
    return this.http.get<Stockprices[]>(this.stockpricesUrl);
  }
 
  public save(stockprices: Stockprices) {
	  
    return this.http.post<Stockprices>(this.stockpricesUrl, stockprices);
  }
}
