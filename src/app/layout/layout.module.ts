import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarAdminComponent } from '../components/navbar-admin/navbar-admin.component';
import { NavbarCustomerComponent } from '../components/navbar-customer/navbar-customer.component';
import { Layout1Component } from './layout-1/layout-1.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    Layout1Component,
    HeaderComponent,
    FooterComponent,
    NavbarAdminComponent,
    NavbarCustomerComponent,
    
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
   

  ],
  exports: [Layout1Component]
})
export class LayoutModule { }
