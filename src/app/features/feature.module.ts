import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { OrderInventoryComponent } from './order-inventory/order-inventory.component';
import { SearchFilterInventoryComponent } from './search-filter-inventory/search-filter-inventory.component';
import { UpdateDeleteInventoryComponent } from './update-delete-inventory/update-delete-inventory.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  {
    path: 'add-inventory',
    component: AddInventoryComponent
  },
  {
    path: 'order-inventory',
    component: OrderInventoryComponent
  },
  {
    path: 'search-inventory',
    component: SearchFilterInventoryComponent
  },
  {
    path: 'update-inventory',
    component: UpdateDeleteInventoryComponent
  },
  {
    path: 'update-form',
    component: UpdateFormComponent
  },
  {
    path: 'view-inventory',
    component: ViewInventoryComponent
  },
  {
    path: 'view-orders',
    component: ViewOrdersComponent
  }
  ]

@NgModule({
  declarations: [
    AddInventoryComponent,
    OrderInventoryComponent,
    SearchFilterInventoryComponent,
    UpdateDeleteInventoryComponent,
    UpdateFormComponent,
    ViewInventoryComponent,
    ViewOrdersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class FeatureModule { }
