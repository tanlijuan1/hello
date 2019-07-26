import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { products } from '../products'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // ActivatedRoute 专门用于由 Angular 路由器加载的每个路由组件。
  // 它包含关于该路由，路由参数以及与该路由关联的其它数据的信息。
  constructor(
    private route: ActivatedRoute,
  ) { }

  // 订阅（subscribe）路由参数并根据其 productId 获取商品信息。
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    window.alert(product.name+' has been added to the cart!');
  }
}
