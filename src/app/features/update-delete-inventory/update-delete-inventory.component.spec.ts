import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteInventoryComponent } from './update-delete-inventory.component';

describe('UpdateDeleteInventoryComponent', () => {
  let component: UpdateDeleteInventoryComponent;
  let fixture: ComponentFixture<UpdateDeleteInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDeleteInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDeleteInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
