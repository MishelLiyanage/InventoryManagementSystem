import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';



export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-order-inventory',
  templateUrl: './order-inventory.component.html',
  styleUrls: ['./order-inventory.component.css']
})
export class OrderInventoryComponent implements OnInit {

  userid: number | null = 0;
  displayedColumns: string[] = ['name', 'quantity', 'price', 'action'];
  itemDataSource: OrderItem[] = [];

  selectedIngredient: InventoryItem | null = null;
  ingredientQuantity: number = 0;

  selectedTool: InventoryItem | null = null;
  toolQuantity: number = 0;

  selectedPartyItem: InventoryItem | null = null;
  partyItemQuantity: number = 0;

  quantity: number = 0;

  cakeIngredients: InventoryItem[] = [];
  cakeTools: InventoryItem[] = [];
  partyItems: InventoryItem[] = [];

  constructor(
    private OrderService: OrderService,
    // private http: HttpClient, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loadInventory();

    this.userid = this.authService.getUserId();
  }

  loadInventory() {
    this.OrderService.getCakeIngredients().subscribe((data) => {
      this.cakeIngredients = data;
    });

    this.OrderService.getCakeTools().subscribe((data) => {
      this.cakeTools = data;
    });

    this.OrderService.getPartyItems().subscribe((data) => {
      this.partyItems = data;
    });
  }

  async validateOrderFormDetails(iteamname: any, selectedquantity: any): Promise<boolean> {
    try {
      const data = await this.OrderService.getItemQuantity(iteamname).toPromise();
      this.quantity = data.quantityinstock;
      const selectedQuantityNum = Number(selectedquantity);

      if (this.quantity < selectedQuantityNum) {
        alert("Can't place the order.");
        return false;
      }

      return true; // Return true if the quantity is sufficient
    } catch (error) {
      console.error('Error fetching item quantity:', error);
      return false; // Handle errors by returning false
    }
  }

  async addIngredient() {
    if (this.selectedIngredient) {

      const existingIngredient = this.itemDataSource.find(item => item.name === this.selectedIngredient!.itemname);

      if (existingIngredient) {

        existingIngredient.quantity += this.ingredientQuantity;

        //call validateOrderFormDetails method
        if (await this.validateOrderFormDetails(this.selectedIngredient.itemname, existingIngredient.quantity)) {

          existingIngredient.price = existingIngredient.quantity * this.selectedIngredient.priceunit;

        } else {
          existingIngredient.quantity -= this.ingredientQuantity;
        }

      } else {
        //call validateOrderFormDetails method
        if (await this.validateOrderFormDetails(this.selectedIngredient.itemname, this.ingredientQuantity)) {

          this.itemDataSource = [...this.itemDataSource, { name: this.selectedIngredient.itemname, quantity: this.ingredientQuantity, price: this.selectedIngredient.priceunit * this.ingredientQuantity }];
        }

      }

      this.resetIngredientForm();
    } else {
      alert("Ingredint not selected")
    }
  }

  async addTool() {
    if (this.selectedTool) {
      const existingTool = this.itemDataSource.find(item => item.name === this.selectedTool!.itemname);

      if (existingTool) {
        existingTool.quantity += this.toolQuantity;
        
        //call validateOrderFormDetails method
        if (await this.validateOrderFormDetails(this.selectedTool.itemname, existingTool.quantity)) {

          existingTool.price = existingTool.quantity * this.selectedTool.priceunit;

        } else {
          existingTool.quantity -= this.toolQuantity;
        }
       
      } else {

        //call validateOrderFormDetails method
        if (await this.validateOrderFormDetails(this.selectedTool.itemname, this.ingredientQuantity)) {

          this.itemDataSource = [...this.itemDataSource, { name: this.selectedTool.itemname, quantity: this.toolQuantity, price: this.selectedTool.priceunit * this.toolQuantity }];
        }
      }

      this.resetToolForm();

    } else {
      alert("Tool not selected")
    }
  }

  async addPartyItem() {
    if (this.selectedPartyItem) {
      const existingPartyItem = this.itemDataSource.find(item => item.name === this.selectedPartyItem!.itemname);

      if (existingPartyItem) {
        existingPartyItem.quantity += this.partyItemQuantity;
        
        //call validateOrderFormDetails method
        if (await this.validateOrderFormDetails(this.selectedPartyItem.itemname, existingPartyItem.quantity)) {

          
        existingPartyItem.price = existingPartyItem.quantity * this.selectedPartyItem.priceunit;

        } else {
          existingPartyItem.quantity -= this.partyItemQuantity;
        }
      } else {

        //call validateOrderFormDetails method
        if (await this.validateOrderFormDetails(this.selectedPartyItem.itemname, this.ingredientQuantity)) {

          this.itemDataSource = [...this.itemDataSource, { name: this.selectedPartyItem.itemname, quantity: this.partyItemQuantity, price: this.selectedPartyItem.priceunit * this.partyItemQuantity }];
        }
        
      }

      this.resetPartyItemForm();
    } else {
      alert("Party Item not selected")
    }
  }

  calculateTotalPrice(): number {
    return this.itemDataSource.reduce((total, item) => total + item.price, 0);
  }

  resetIngredientForm() {
    this.selectedIngredient = null;
    this.ingredientQuantity = 0;
  }

  resetToolForm() {
    this.selectedTool = null;
    this.toolQuantity = 0;
  }

  resetPartyItemForm() {
    this.selectedPartyItem = null;
    this.partyItemQuantity = 0;
  }

  placeOrder() {
    const orderData = {
      userid: this.userid,
      items: this.itemDataSource,
      totalAmount: this.calculateTotalPrice()
    };

    this.OrderService.placeOrder(orderData).subscribe((response: any) => {
      if (response.success) {
        alert('Order placed successfully');
        this.itemDataSource = []; // Clear the cart after placing the order
      } else {
        alert('Failed to place order');
      }
    });
  }

  removeItem(index: number) {
    this.itemDataSource.splice(index, 1);
    this.itemDataSource = [...this.itemDataSource];
  }
}

interface InventoryItem {
  itemname: string;
  priceunit: number;
}