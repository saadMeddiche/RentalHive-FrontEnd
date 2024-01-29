import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stock} from "../models/stock";
import {StockRequestAdd} from "../models/stockRequestAdd";
import {StockRequestUpdate} from "../models/stockRequestUpdate";
import {DemandAddComponent} from "../../demand/components/demand-add/demand-add.component";
import {DemandRequestAdd} from "../../demand/models/DemandRequestAdd";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrrl = 'http://localhost:8080/api/stocks';

  constructor(private http :HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrrl);
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get<Stock>(this.apiUrrl + '/' + id);
  }

  addStock(equipment: StockRequestAdd): Observable<Stock> {
    return this.http.post<Stock>(this.apiUrrl, equipment, httpOptions);
  }

  updateStock(equipment: StockRequestUpdate , equipmentId: number):Observable<Stock>{
    return this.http.put<Stock>(this.apiUrrl+'/'+ equipmentId , equipment, httpOptions);
  }

  deleteStock(equipmentId: number | undefined): Observable<Stock> {
    return this.http.delete<Stock>(this.apiUrrl + '/' + equipmentId);
  }

  getCountOfAvailableStocks(equipmentId: number |undefined ,demand : DemandRequestAdd ): Observable<number> {
    return this.http.post<number>(this.apiUrrl + '/available/equipment/' + equipmentId ,demand, httpOptions);
  }
}
