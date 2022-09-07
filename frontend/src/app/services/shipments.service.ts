import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shipment } from '../models/Shipment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {

  API_URI = 'http://127.0.0.1:8000/api/shipments';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get(`${this.API_URI}`);
  }

  show(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  store(shipment: Shipment){
    return this.http.post(`${this.API_URI}`, shipment);
  }

  update(id: string|number, updatedShipments: Shipment): Observable<Shipment>{
    return this.http.put(`${this.API_URI}/${id}`, updatedShipments);
  }

  destroy(id: string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

}
