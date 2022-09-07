import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Truck} from '../models/Truck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  API_URI = 'http://127.0.0.1:8000/api/trucks';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get(`${this.API_URI}`);
  }

  show(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  store(truck: Truck){
    return this.http.post(`${this.API_URI}`, truck);
  }

  update(id: string|number, updatedTruck: Truck): Observable<Truck>{
    return this.http.put(`${this.API_URI}/${id}`, updatedTruck);
  }

  destroy(id: string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }
  
}
