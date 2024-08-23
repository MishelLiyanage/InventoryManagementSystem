import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';


@Component({
  selector: 'app-update-delete-inventory',
  templateUrl: './update-delete-inventory.component.html',
  styleUrl: './update-delete-inventory.component.css'
})


export class UpdateDeleteInventoryComponent implements OnInit{
  displayedColumns: string[] = ['id', 'category', 'itemname', 'priceunit', 'quantityinstock', 'description', 'addeddate', 'actions'];
  dataSource: any[] = [];

  constructor(private router: Router, private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory() {
    this.inventoryService.getInventory().subscribe(data => {
      this.dataSource = data;
    }, error => {
      console.error('Error loading inventory data:', error);
    });
  }

  onUpdate(element: any) {
    this.router.navigate(['/feature/update-form', element.id]);
  }

  onDelete(element: any) {
    this.inventoryService.deleteProduct(element.id).subscribe(() => {
      this.loadInventory(); // Reload the inventory after deletion
    }, error => {
      console.error('Error deleting product:', error);
    });
  }
}
