import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent
  }
  ]

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CustomerDashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class DashboardModule { }
