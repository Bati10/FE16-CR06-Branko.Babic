import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
   {
      path: "", component: HomeComponent
   },
  {
     path: "product-list", component: ProductListComponent
  },
  {
     path: 'product-list/products/:productId', component: ProductDetailsComponent
  },
  {
     path: 'cart', component: CartComponent
},
{
   path: "about", component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
