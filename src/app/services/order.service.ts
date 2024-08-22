import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface InventoryItem {
  itemname: string;
  priceunit: number;
}

export interface Order {
  id: number;
  customerId: number;
  amount: number;
  date: Date;
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost/ims-backend'; // Backend API URL

  constructor(private http: HttpClient) {}

  getCakeIngredients(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.apiUrl}/inventory.php?category=Cake Ingredients`);
  }

  getCakeTools(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.apiUrl}/inventory.php?category=Cake Tools`);
  }

  getPartyItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.apiUrl}/inventory.php?category=party items`);
  }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/placeOrder.php`, orderData);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/getOrders.php`);
  }
}
