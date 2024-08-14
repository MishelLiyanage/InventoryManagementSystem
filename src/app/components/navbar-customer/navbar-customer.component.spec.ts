import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCustomerComponent } from './navbar-customer.component';

describe('NavbarCustomerComponent', () => {
  let component: NavbarCustomerComponent;
  let fixture: ComponentFixture<NavbarCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
