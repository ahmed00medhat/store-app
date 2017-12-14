import { Injectable } from '@angular/core';
import {Product} from '../product';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ProductService {

  products: Product[];
  obProduct= new Subject<Product[]>();

  constructor() {
    this.products = [new Product(5, 'iphone', 1000, 'iPhone 7'),
      new Product(8, 'Samsung TV', 1000, '50" OLED TV')];
    //this.obProduct = of(this.products);

    // console.log(typeof (this.obProduct));
  }

  getAllProducts(): Product[] {
    // this.obProduct.next(this.products);
    return this.products;
  }

  getProductById(myId: number): Product {
    let i = 0;

    for (i; i < this.products.length; i++) {
      if (this.products[i].getId() === myId) {
        return this.products[i];
      }
    }

    return null;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    this.obProduct.next(this.products);
    console.log(this.obProduct);
  }

}
