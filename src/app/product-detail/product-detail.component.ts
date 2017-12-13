import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Product} from '../product';
import {forEach} from '@angular/router/src/utils/collection';
import {IButton} from 'selenium-webdriver';
import {CartItemsComponent} from '../cart/cart-items/cart-items.component';
import {CartModule} from '../cart/cart.module';
import {CartService} from '../cart/cart-items/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: []
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;
  xcart: CartService;

  @Output()
  deleteProduct = new EventEmitter<Product>();
  constructor(xcart: CartService) {
    this.xcart = xcart;
  }

  ngOnInit() {
  }

  requestDelete() {
    this.deleteProduct.emit(this.product);
    this.product = null;
  }

  addToCart() {
    this.xcart.addProduct(this.product);
  }



}
