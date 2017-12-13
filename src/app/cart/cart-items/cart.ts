import {Product} from '../../product';
import {Optional} from '@angular/core';
import {CartItem} from './cart-item';


export class Cart {

  private items: CartItem[];
  constructor() {
    this.items = [];
  }

  addItem(product: Product): void {
    const item = new CartItem(product, 1);
    // console.log(this.items.indexOf(item));
    let matched = Array.from(this.items.filter((x) => x.getItem().getId() === product.getId()));

    if ( matched.length > 0) {
      matched[0].incQty();
    }else {
      this.items.push(item);
    }

    // console.log("qty=" + this.items.filter((x) => x.getItem().getId() === product.getId()).reduce((total, x) => total + x.getQty(), 0));
    /*if (this.items.indexOf(item) !== -1) {
      this.items[this.items.indexOf(item)].incQty();
    }*/
  }

  getItems(@Optional() id: number): Product[] {
    let temp: Product[];
    if (id == null) {
      temp = Array.from(this.items.map((item) => item.getItem()));
    }else {

      temp = Array.from(this.items.filter((x) => x.getItem().getId() === id).map((y) => y.getItem()));
      /*this.items.forEach(function(p, i) {
        if (p.getItem().getId() === id) {
          temp.push(p.getItem());
        }
      });*/
    }

    // console.log("temp=");
    return temp;
  }

  public getFullItems(): CartItem[] {
    return this.items;
  }
}
