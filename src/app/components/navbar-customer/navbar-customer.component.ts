import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  templateUrl: './navbar-customer.component.html',
  styleUrl: './navbar-customer.component.css'
})
export class NavbarCustomerComponent {
  constructor(private router: Router){}

  // navigateToDashboard(){
  //   this.router.navigate(['/dashboard/customer-dashboard']);
  // }

  navigateToViewInventory(){
    this.router.navigate(['/feature/view-inventory']);
  }

  navigateToSearchInventory(){
    this.router.navigate(['/feature/search-inventory']);
  }

  navigateToOrderInventory(){
    this.router.navigate(['/feature/order-inventory']);
  }
}
