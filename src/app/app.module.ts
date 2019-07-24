import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModuleWithProviders } from '@angular/core';
import { RouterModule }  from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';

let rootRouterModules: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductsAlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rootRouterModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
