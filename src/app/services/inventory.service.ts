import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItem } from '../features/view-inventory/view-inventory.component';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  private apiUrl = 'http://localhost/ims-backend';

  constructor(private http: HttpClient) { }

  addItem(itemData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_item.php`, itemData);
  }

 
  getInventory(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.apiUrl}/getInventory.php`);
  }

  getProductCount(): Observable<{ productCount: number }> {
    return this.http.get<{ productCount: number }>(`${this.apiUrl}/getProductCount.php`);
  }
}
