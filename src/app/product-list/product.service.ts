import { Injectable } from '@angular/core';
import {Product} from '../product';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class ProductService {

  products: Product[];
  constructor() {
    this.products= [new Product(5, 'iphone', 1000, 'iPhone 7'),
      new Product(8, 'Samsung TV', 1000, '50" OLED TV')];
  }

  getAllProducts(): Observable<Product[]>{
    return of(this.products);
  }

  getProductById(myId: number):Product{
    let i = 0;

    for (i; i < this.products.length; i++){
      if (this.products[i].getId() === myId) {
        return this.products[i];
      }
    }

    return null;
  }

}
