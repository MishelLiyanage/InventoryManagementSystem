import { Component } from '@angular/core';
import { OrderService,Order } from '../../services/order.service';

export interface Products {
  id: number;
  customerId: number;
  amount: number;
  date: Date;
}

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {
  displayedColumns: string[] = ['id', 'customerId', 'amount', 'date'];
  dataSource: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.dataSource = orders;
    });
  }
}
