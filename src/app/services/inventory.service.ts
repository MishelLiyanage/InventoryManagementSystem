import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItem } from '../features/view-inventory/view-inventory.component';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  private apiUrl = 'https://api.viosu.online';

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

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/updateform.php?id=${id}`);
  }

  // New method to update a product
  updateProduct(productData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-product.php`, productData);
  }

  // Method to delete a product
  deleteProduct(productId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete-product.php`, { id: productId });
  }

  checkItemDuplicate(category: string, itemName: string): Observable<{ exists: boolean }> {
    // Construct the query parameters
    const params = { category, itemName };

    // Make the GET request to your PHP API
    return this.http.get<{ exists: boolean }>(`${this.apiUrl}/check-duplicate.php`, { params });
  }

}
