import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import {CartComponent} from "./cart/cart.component";

export const rootRouterConfig: Routes = [
   { path: '', component: ProductListComponent },
   { path: 'products/:productId', component: ProductDetailsComponent },
   { path: 'cart', component: CartComponent },
  // { path: 'shipping', component: ShippingComponent },
]
