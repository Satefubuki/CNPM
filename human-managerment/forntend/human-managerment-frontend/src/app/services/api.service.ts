import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }
  baseUrl = 'http://localhost:50618/';
  apiUrl = {
    employees: {
      home: `${this.baseUrl}employees`,
      images: `${this.baseUrl}uploads/images/employees/`
    },
    workingTimes: {
      home: `${this.baseUrl}working-times`
    },
    timeSlots: {
      home: `${this.baseUrl}time-slots`
    },
    location:{
      province: `${this.baseUrl}addresses/province`,
      district: `${this.baseUrl}addresses/district`,
      ward: `${this.baseUrl}addresses/ward`,
      address: `${this.baseUrl}addresses/address`

    }
  };

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
  post<T>(url: string, data: Object): Observable<T> {
    return this.http.post<T>(url, data);
  }
  put<T>(url: string, data: Object): Observable<T> {
    return this.http.put<T>(url, data);
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
