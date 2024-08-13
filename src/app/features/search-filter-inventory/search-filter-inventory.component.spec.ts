import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterInventoryComponent } from './search-filter-inventory.component';

describe('SearchFilterInventoryComponent', () => {
  let component: SearchFilterInventoryComponent;
  let fixture: ComponentFixture<SearchFilterInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFilterInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFilterInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
