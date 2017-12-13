import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import {CartService} from './cart.service';
import {CartItem} from './cart-item';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input()
  private products: CartItem[];
  private showCart: boolean;
  private total: number;

  constructor(private MyCart: CartService) {
    this.showCart = false;

  }

  ngOnInit() {
    this.products = this.MyCart.getFullItems();
    this.total = this.MyCart.getCartTotal();
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  getNumberOfItems(): number {
    return this.MyCart.getItemCount(null);
  }

  getCartTotal(): number {
    return this.MyCart.getCartTotal();
  }

}
