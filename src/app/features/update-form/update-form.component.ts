import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {

  product: any = {};

  constructor(private route: ActivatedRoute,  private router: Router,private inventoryService: InventoryService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inventoryService.getProductById(id).subscribe(data => {
        this.product = data;
      });
    }
  }

  onSubmit(form: NgForm) {
    this.inventoryService.updateProduct(this.product).subscribe(() => {
      this.router.navigate(['/feature/update-inventory']);
    });
  }

  onCancel() {
    this.router.navigate(['/feature/update-inventory']);
  }
}
