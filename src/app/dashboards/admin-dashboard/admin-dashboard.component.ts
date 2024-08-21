import { Component } from '@angular/core';
import { LayoutConfigService } from '../../services/layout-config.service';
import { LayoutConfig } from '../../models/config/layout-config';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  customers: any[] = [];

  constructor(private layoutConfigService:LayoutConfigService, private customerService: CustomerService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.layoutConfigService.setConfig(new LayoutConfig(true, true, false, true));

    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }  


}
