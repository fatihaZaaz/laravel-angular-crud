import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StorageLocation} from '../models/StorageLocation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageLocationsService {

  API_URI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get(`${this.API_URI}/locations`);
  }

  storageLocationAvailable(){
    return this.http.get(`${this.API_URI}/locations-available`);
  }

  show(id: string) {
    return this.http.get(`${this.API_URI}/locations/${id}`);
  }

  store(storageLocation: StorageLocation){
    return this.http.post(`${this.API_URI}/locations`, storageLocation);
  }

  update(id: string|number, updatedStorageLocation: StorageLocation): Observable<StorageLocation>{
    return this.http.put(`${this.API_URI}/locations/${id}`, updatedStorageLocation);
  }

  destroy(id: string){
    return this.http.delete(`${this.API_URI}/locations/${id}`);
  }

}
