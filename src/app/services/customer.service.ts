import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost/ims-backend/getCustomers.php'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCustomerCount(): Observable<{ customerCount: number }> {
    return this.http.get<{ customerCount: number }>(`http://localhost/ims-backend/getCustomerCount.php`);
  }
}
