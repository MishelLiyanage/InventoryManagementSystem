import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.css'
})
export class AddInventoryComponent {
  constructor(private inventoryService: InventoryService) { }

  addItem(form: NgForm) {
    if (form.valid) {
      this.inventoryService.addItem(form.value).subscribe(
        response => {
          console.log('Item added successfully', response);
          form.reset(); // Reset the form after submission
        },
        error => {
          console.error('Error adding item', error);
        }
      );
    }
  }
}
