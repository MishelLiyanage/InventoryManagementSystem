import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inventoryService.getProductById(id).subscribe(data => {
        this.product = data;
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Display the confirmation dialog
      const confirmed = confirm('Are you sure you want to update this item?');

      if(confirmed){
        // Proceed with the update if the user confirms
        this.inventoryService.updateProduct(this.product).subscribe(() => {
          this.router.navigate(['/feature/update-inventory']);
        });

      }else{
        // Handle the case when the user cancels the update
        alert("Update cancelled")
      }
      
    } else {
      // Handle the case where the form is invalid
      console.log('Form is invalid');
    }
  }

  onCancel() {
    this.router.navigate(['/feature/update-inventory']);
  }
}
