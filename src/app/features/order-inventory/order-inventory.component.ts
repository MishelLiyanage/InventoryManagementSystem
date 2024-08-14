import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-order-inventory',
  templateUrl: './order-inventory.component.html',
  styleUrl: './order-inventory.component.css'
})

export class OrderInventoryComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

cakeIngredients = [
    'Icing Sugar', 'Baking Soda', 'Cocoa Powder', 'Vanilla Extract', 
    'All-Purpose Flour', 'Butter (Unsalted)', 'Eggs', 'Baking Powder', 
    'Milk', 'Dark Chocolate', 'Food Coloring', 'Cream Cheese', 'Whipped Cream'
  ];

  cakeTools = [
    'Spatula', 'Silicone Brush', 'Scraper', 'Pallet Knife', 
    'Cake Trays', 'Mixing Bowls', 'Measuring Cups', 'Measuring Spoons', 
    'Whisk', 'Rolling Pin', 'Cake Leveler', 'Piping Bags', 'Cake Stand'
  ];

  partyItems = [
    'Candles', 'Happy Birthday Banners', 'Foil Number Balloons', 
    'Paper Plates', 'Napkins', 'Party Hats', 'Plastic Cutlery', 
    'Tablecloths', 'Gift Bags', 'Streamers', 'Balloons (Assorted Colors)', 
    'Cake Toppers'
  ];
}
