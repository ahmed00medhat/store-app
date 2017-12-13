import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {CartModule} from './cart/cart.module';
import {CartItemsComponent} from './cart/cart-items/cart-items.component';
import {CartService} from './cart/cart-items/cart.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
