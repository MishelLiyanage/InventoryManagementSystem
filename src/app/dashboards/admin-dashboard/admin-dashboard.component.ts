import { Component } from '@angular/core';
import { LayoutConfigService } from '../../services/layout-config.service';
import { LayoutConfig } from '../../models/config/layout-config';
import { CustomerService } from '../../services/customer.service';
import { InventoryService } from '../../services/inventory.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  customerCount: number = 0;
  productCount: number = 0;
  orderCount: number = 0;
  customers: any[] = [];

  constructor(
    private layoutConfigService:LayoutConfigService, 
    private customerService: CustomerService,
    private inventoryService: InventoryService,
    private orderService: OrderService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.layoutConfigService.setConfig(new LayoutConfig(true, true, false, true));

    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });

    this.customerService.getCustomerCount().subscribe((data) => {
      this.customerCount = data.customerCount;
      console.log(this.customerCount);
    });

    this.inventoryService.getProductCount().subscribe((data) => {
      this.productCount = data.productCount;
      console.log("product count: " + this.customerCount);
    });

    this.orderService.getOrderCount().subscribe((data) => {
      this.orderCount = data.orderCount;
      console.log("order count: " + this.orderCount);
    });
  }  


}
