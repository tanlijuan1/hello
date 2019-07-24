import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'

export const rootRouterConfig: Routes = [
   { path: '', component: ProductListComponent },
   { path: 'products', component: ProductDetailsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'shipping', component: ShippingComponent },
]
