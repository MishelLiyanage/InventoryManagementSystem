import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ReportService } from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {

  
  reportData: any;

  constructor(private reportService: ReportService) { }
  ngOnInit(): void {
    this.createWeeklySalesChart();
    this.createDailyOrdersChart();
    this.createInventoryStockChart();
  }

  fetchAndCreateChart(reportType: string, chartType: string, chartElementId: string): void {
    this.reportService.getReport(reportType).subscribe(data => {
      
      let labels: string[] = [];
      let datasetData: number[] = [];
  
      if (reportType === 'weekly_sales') {
        labels = data.map((item: any) => item.week);
        datasetData = data.map((item: any) => parseInt(item.total_sales, 10));
      } else if (reportType === 'daily_orders') {
        labels = data.map((item: any) => item.date);
        datasetData = data.map((item: any) => parseInt(item.total_orders, 10));
      } else if (reportType === 'inventory_stock') {
        labels = data.map((item: any) => item.itemname);
        datasetData = data.map((item: any) => parseInt(item.quantityinstock, 10));
      }
  
      const backgroundColor = ['#17a2b8','#ffc107','#dc3545','#28a745','#007bff'];
  
      const chartData = {
        labels: labels,
        datasets: [{
          data: datasetData,
          backgroundColor: backgroundColor.slice(0, datasetData.length),
        }]
      };
  
      this.createChart(chartData, chartType, chartElementId);
    });
  }
  
  
  
  createChart(chartData: any, chartType: any, chartElementId: string): void {
    new Chart(chartElementId, {
      type: chartType,
      data: chartData,
      options: {
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }
  
  
  createWeeklySalesChart() {

    this.fetchAndCreateChart('weekly_sales', 'bar', 'weeklySalesChart');

  }
  
  createDailyOrdersChart() {
    this.fetchAndCreateChart('daily_orders', 'bar', 'dailyOrdersChart');


  }

  createInventoryStockChart() {
    this.fetchAndCreateChart('inventory_stock', 'pie', 'inventoryStockChart');



  }

  

  printPage() {
    window.print();
  }
  downloadCsv(reportType: string): void {
    
    this.reportService.downloadCsvReport(reportType).subscribe(blob => {
      
      const url = window.URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `${reportType}.csv`;
      
      document.body.appendChild(a); // Append to DOM for Firefox 
      a.click();
      console.log('Downloaded');
      
      window.URL.revokeObjectURL(url); // Clean up URL object
      a.remove(); // Remove the element after download
    });
  }

  }

