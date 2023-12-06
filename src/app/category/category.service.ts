import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipment} from "../equipment/models/equipment";
import {Category} from "./models/Category";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrrl = 'http://localhost:8080/api/categories';


  constructor(private http :HttpClient) { }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrrl);
  }
}
