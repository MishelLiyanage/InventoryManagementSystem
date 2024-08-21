import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://localhost/imsBA';

  constructor(private http: HttpClient) { }

  addItem(itemData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_item.php`, itemData);
  }
}
