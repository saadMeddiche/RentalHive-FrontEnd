import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipment} from "../models/equipment";
import {EquipmentRequestAdd} from "../models/equipmentRequestAdd";
import {EquipmentRequestUpdate} from "../models/equipmentRequestUpdate";


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

  getEquipment(id: number | undefined): Observable<Equipment> {
    return this.http.get<Equipment>(this.apiUrrl + '/' + id);
  }

  addEquipment(equipment: EquipmentRequestAdd): Observable<Equipment> {
    return this.http.post<Equipment>(this.apiUrrl, equipment, httpOptions);
  }

  updateEquipment(equipment: EquipmentRequestUpdate , equipmentId: number):Observable<Equipment>{
    return this.http.put<Equipment>(this.apiUrrl+'/'+ equipmentId , equipment, httpOptions);
  }

  deleteEquipment(equipmentId: number | undefined): Observable<Equipment> {
    return this.http.delete<Equipment>(this.apiUrrl + '/' + equipmentId);
  }
}
