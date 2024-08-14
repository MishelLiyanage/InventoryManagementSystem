import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { AddInventoryComponent } from './features/add-inventory/add-inventory.component';
import { UpdateDeleteInventoryComponent } from './features/update-delete-inventory/update-delete-inventory.component';
import { MatTableModule } from '@angular/material/table';
import { UpdateFormComponent } from './features/update-form/update-form.component';
import { ViewInventoryComponent } from './features/view-inventory/view-inventory.component';
import { SearchFilterInventoryComponent } from './features/search-filter-inventory/search-filter-inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NavbarCustomerComponent } from './components/navbar-customer/navbar-customer.component';
import { OrderInventoryComponent } from './features/order-inventory/order-inventory.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewOrdersComponent } from './features/view-orders/view-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AddInventoryComponent,
    UpdateDeleteInventoryComponent,
    UpdateFormComponent,
    ViewInventoryComponent,
    SearchFilterInventoryComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent,
    NavbarAdminComponent,
    NavbarCustomerComponent,
    OrderInventoryComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

