import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventoryComponent } from './view-inventory.component';

describe('ViewInventoryComponent', () => {
  let component: ViewInventoryComponent;
  let fixture: ComponentFixture<ViewInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
