import { Component, OnInit } from '@angular/core';
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit() {
  }

  share(product : any): void {
     window.alert(product.name+" is shared successfully")
  }

  onNotify(product : any) {
    window.alert(product.name+' is expensive: $'+product.price);
  }
}
