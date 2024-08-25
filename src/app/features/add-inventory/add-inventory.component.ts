import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  id: number | null = 0;
  validationErrors: {
    itemName?: string;
    category?: string;
    unitPrice?: string;
    quantity?: string;
    description?: string;
  } = {};

  // Define the minimum allowed values
  readonly MIN_UNIT_PRICE: number = 1;
  readonly MIN_QUANTITY: number = 1;

  constructor(private inventoryService: InventoryService, private authService: AuthService) {}

  ngOnInit(): void {
    this.id = this.authService.getUserId();
  }

  async checkItemDuplicate(category: string, itemName: string): Promise<boolean> {
    return new Promise((resolve) => {
      if (!category || !itemName) {
        this.validationErrors.itemName = 'Category and item name are required';
        resolve(true); // Resolve with true indicating the name is invalid
        return;
      }

      // Check for duplicates based on category and item name
      this.inventoryService.checkItemDuplicate(category, itemName).subscribe(
        (response: { exists: boolean }) => {
          if (response.exists) {
            this.validationErrors.itemName = `The item "${itemName}" already exists in the category "${category}"!`;
            resolve(true); // Resolve with true indicating the item and category combination already exists
          } else {
            resolve(false); // Resolve with false if the item and category combination does not exist
          }
        },
        (error: any) => {
          console.error('Error checking item duplicate', error);
          resolve(false); // Resolve with false if an error occurs
        }
      );
    });
  }

  async validateForm(form: NgForm): Promise<boolean> {
    const { Category, ItemName, unitprice, Quantity, Description } = form.value;

    // Reset all validation errors
    this.validationErrors = {};

    // Check if the item and category combination exists first
    const duplicateExists = await this.checkItemDuplicate(Category, ItemName);
    if (duplicateExists) {
      // If the combination exists, skip further validation and return false
      return false;
    }

    // Category validation
    if (!Category) {
      this.validationErrors.category = 'Category is required';
    }

    // Unit price validation
    if (!unitprice) {
      this.validationErrors.unitPrice = 'Price of unit is required';
    } else if (unitprice < this.MIN_UNIT_PRICE) {
      this.validationErrors.unitPrice = `Price of unit cannot be zero or null`;
    }

    // Quantity validation
    if (!Quantity) {
      this.validationErrors.quantity = 'Quantity is required';
    } else if (Quantity < this.MIN_QUANTITY) {
      this.validationErrors.quantity = `Quantity cannot be zero or null`;
    }

    // Return true if no validation errors
    return Object.keys(this.validationErrors).length === 0;
  }

  async addItem(form: NgForm): Promise<void> {
    if (this.id !== null) {
      const formData = { ...form.value, adminid: this.id };

      // Validate the form before proceeding
      const isValid = await this.validateForm(form);

      if (isValid) {
        console.log('Form is valid, submitting data:', formData); 
        this.inventoryService.addItem(formData).subscribe(
          response => {
            console.log('Item added successfully', response);
            alert("Item added successfully");
            form.reset(); // Reset the form after successful submission
          },
          error => {
            console.error('Error adding item', error);
          }
        );
      } else {
        console.log('Form is invalid:', this.validationErrors); // Debug log for invalid form
      }
    }
  }
}
