import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from '../models/Package';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  API_URI = 'http://127.0.0.1:8000/api/packages';

  constructor(private http: HttpClient) { }

  index(){
    return this.http.get(`${this.API_URI}`);
  }

  packagesNotAssigned(){
    return this.http.get(`${this.API_URI}/not-assigned`);
  }

  show(id: string) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  store(packages: Package){
    return this.http.post(`${this.API_URI}`, packages);
  }

  update(id: string|number, updatedPackages: Package): Observable<Package>{
    return this.http.put(`${this.API_URI}/${id}`, updatedPackages);
  }

  destroy(id: string){
    return this.http.delete(`${this.API_URI}/${id}`);
  }

}
