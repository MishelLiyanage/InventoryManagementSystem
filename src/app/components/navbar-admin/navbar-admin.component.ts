import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css'
})
export class NavbarAdminComponent {
  constructor(private router: Router){}

  navigateToAddInventory(){
    this.router.navigate(['/feature/add-inventory']);
  }

  navigateToUpdateInventory(){
    this.router.navigate(['/feature/update-inventory']);
  }

  navigateToViewInventory(){
    this.router.navigate(['/feature/view-inventory']);
  }

  navigateToSearchInventory(){
    this.router.navigate(['/feature/search-inventory']);
  }

  navigateToViewOrders(){
    this.router.navigate(['/feature/view-orders']);
  }
}
