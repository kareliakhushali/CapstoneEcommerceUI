import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
const routes: Routes = [
  {path:'',component:CategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'addcategory',component:AddCategoryComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'editCategory',component:EditCategoryComponent},
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
