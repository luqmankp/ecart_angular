import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ViewAllProductsComponent } from './viewallproducts/viewallproducts.component';

const routes: Routes = [
  { path: '', component: ViewAllProductsComponent },
  { path: 'add_product', component: AddproductComponent },
  { path: 'edit_product/:id', component: EditproductComponent },
  { path: 'view_product/:id', component: ViewproductComponent },
  { path: 'delete_product/:id', component: DeleteproductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
