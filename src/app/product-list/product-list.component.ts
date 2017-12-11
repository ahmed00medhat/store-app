import {Component, OnInit, Output} from '@angular/core';
import {Product} from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  @Output()
  selectedProduct: Product;
  //myproduct: Product;
  constructor() {
    //let myproduct = new Product(5, 'iphone', 1000, 'iPhone 7');
    this.products = [new Product(5, 'iphone', 1000, 'iPhone 7'),
      new Product(8, 'Samsung TV', 1000, '50" OLED TV')];
    //console.log(this.products);
    //console.log(this.myproduct);
  }

  ngOnInit() {}

  delete(product: Product){
    this.products.splice(this.products.indexOf(product),1);
  }
}
