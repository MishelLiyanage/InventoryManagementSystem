import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Products {
  id: number;
  category: string;
  quantity: number;
  name: string;
  date: Date;
  manufacturer: string;
}

@Component({
  selector: 'app-update-delete-inventory',
  templateUrl: './update-delete-inventory.component.html',
  styleUrl: './update-delete-inventory.component.css'
})
export class UpdateDeleteInventoryComponent implements OnInit{
  displayedColumns: string[] = ['id', 'category', 'itemname', 'priceunit', 'quantityinstock', 'description', 'addeddate', 'actions'];
  dataSource: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory() {
    this.http.get<Products[]>('http://localhost/ims-backend/get-products.php').subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.error('Error loading inventory data:', error);
    });
  }

  onUpdate(element: Products) {
    this.router.navigate(['/feature/update-form', element.id]);
  }

  onDelete(element: Products) {
    this.http.post('http://localhost/ims-backend/delete-product.php', { id: element.id }).subscribe(() => {
      this.loadInventory(); // Reload the inventory after deletion
    }, error => {
      console.error('Error deleting product:', error);
    });
  }
}
