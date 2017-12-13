import {Injectable, Optional} from '@angular/core';

import {Product} from '../../product';
import {Cart} from './cart';
import {CartItem} from './cart-item';

@Injectable()
export class CartService {

   private MyCart: Cart;
  constructor() {
     this.MyCart = new Cart();
  }

  addProduct(product: Product): void {
    this.MyCart.addItem(product);
    // console.log(this.MyCart.getItems(null));
  }

  getItems(): Product[] {
    return this.MyCart.getItems(null);
  }

  getItemCount(@Optional() id: number): number {
      return this.MyCart.getFullItems().reduce((acc, x) =>  {
        return acc + x.getQty();
      }, 0);
  }

  getCartTotal(): number {
    return this.MyCart.getFullItems().reduce((total, x) => total + (x.getItem().getPrice() * x.getQty()), 0);
  }

  public getFullItems(): CartItem[] {
    return this.MyCart.getFullItems();
  }
}
