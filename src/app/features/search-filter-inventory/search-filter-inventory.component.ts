import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-search-filter-inventory',
  templateUrl: './search-filter-inventory.component.html',
  styleUrl: './search-filter-inventory.component.css'
})
export class SearchFilterInventoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'category', 'itemname', 'priceunit', 'quantityinstock', 'description', 'addeddate'];
  dataSource: any[] = [];

  searchQuery: string = '';
  selectedCategory: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    const params = new HttpParams()
      .set('searchQuery', this.searchQuery.trim())
      .set('category', this.selectedCategory);

    this.http.get<any[]>('http://localhost/ims-backend/search.php', { params })
      .subscribe(data => {
        this.dataSource = data;
      });
  }

  onSearch(): void {
    this.loadData();
    
    this.searchQuery = '';
    this.selectedCategory = '';
    
  }

}
