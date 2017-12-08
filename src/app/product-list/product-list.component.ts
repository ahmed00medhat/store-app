import { Component, OnInit } from '@angular/core';
import {Product} from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  myproduct: Product;
  constructor() {
    this.myproduct = new Product(5, 'iphone', 1000, 'iPhone 7');
    this.products = [this.myproduct];
    console.log(this.products);
    console.log(this.myproduct);
  }

  ngOnInit() {


  }

}
