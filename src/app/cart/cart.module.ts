import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items/cart-items.component';
import {CartService} from './cart-items/cart.service';
import { TotalPipe } from './cart-items/total.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartItemsComponent, TotalPipe],
  exports: [CartItemsComponent],
  providers: [CartService]
})
export class CartModule { }
