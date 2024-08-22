import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewInventoryComponent } from './features/view-inventory/view-inventory.component';

const routes: Routes = [
  { path: 'admin-view-inventory', component: ViewInventoryComponent },
  { path: 'user-view-inventory', component: ViewInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
