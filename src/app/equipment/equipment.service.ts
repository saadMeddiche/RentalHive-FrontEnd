import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipment} from "./models/equipment";
import {EquipmentRequestAdd} from "./models/equipmentRequestAdd";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  private apiUrrl = 'http://localhost:8080/api/equipments';


  constructor(private http :HttpClient) { }


  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiUrrl);
  }

  addEquipment(equipment: EquipmentRequestAdd): Observable<Equipment> {
    return this.http.post<Equipment>(this.apiUrrl, equipment, httpOptions);
  }
}
