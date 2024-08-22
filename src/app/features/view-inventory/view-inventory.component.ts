import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

export interface InventoryItem {
  id: number;
  category: string;
  itemname: string;
  priceunit: string;
  quantityinstock: number;
  description: string;
  addeddate: string;
  adminId: number;
}

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrl: './view-inventory.component.css'
})

export class ViewInventoryComponent {
  displayedColumns: string[] = ['id', 'category', 'itemname', 'priceunit', 'quantityinstock', 'description', 'addeddate', 'adminId'];
  dataSource: InventoryItem[] = []; 

  constructor(private InventoryService: InventoryService) { }


  ngOnInit(): void {
    this.InventoryService.getInventory().subscribe((data: InventoryItem[]) => {
      this.dataSource = data;
    });
  }

}






