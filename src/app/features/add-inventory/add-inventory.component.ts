import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.css'
})
export class AddInventoryComponent {
  id: number | null = 0;

  constructor(private inventoryService: InventoryService, private authService: AuthService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.authService.getUserId();
    console.log("Logged in user ID:", this.id);
  }

  
  addItem(form: NgForm) {
    if(this.id !== null){
      const formData = {...form.value, adminid: this.id};
    if (form.valid) {
      this.inventoryService.addItem(formData).subscribe(
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
}
