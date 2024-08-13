import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createWeeklySalesChart();
    this.createSupplierPerformanceChart();
    this.createTopSuppliersChart();
  }

  createWeeklySalesChart() {
    new Chart('weeklySalesChart', {
      type: 'bar',
      data: {
        labels: ['Apple', 'Samsung', 'Asus', 'Xiaomi', 'Logitech'],
        datasets: [{
          
          data: [74, 73, 47, 67, 62],
          backgroundColor: ['#17a2b8','#ffc107','#dc3545','#28a745','#007bff'],
        }]
      },
      options: {
      // Chart options
      }
    });
  }
  createTopSuppliersChart() {
    new Chart('topSuppliersChart', {
      type: 'pie',
      data: {
        labels: ['Apple', 'Samsung', 'Asus', 'Xiaomi', 'Logitech'],
        datasets: [{
          
          data: [74, 73, 47, 67, 62],
          backgroundColor: ['#17a2b8','#ffc107','#dc3545','#28a745','#007bff'],
        }]
      },
      options: {
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }
  
  createSupplierPerformanceChart() {
    new Chart('supplierPerformanceChart', {
      type: 'bar',
      data: {
        labels: ['Apple', 'Samsung', 'Asus', 'Xiaomi', 'Logitech'],
        datasets: [{
          label: 'Early',
          data: [74, 73, 47, 67, 62],
          backgroundColor: '#17a2b8',
        }, {
          label: 'On Time',
          data: [18, 13, 18, 12, 28],
          backgroundColor: '#ffc107',
        }, {
          label: 'Late',
          data: [8, 14, 35, 21, 10],
          backgroundColor: '#dc3545',
        }]
      },
      options: {
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }

}
