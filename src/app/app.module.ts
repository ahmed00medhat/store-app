import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {CartModule} from './cart/cart.module';
import {CartItemsComponent} from './cart/cart-items/cart-items.component';
import {CartService} from './cart/cart-items/cart.service';
import { ProductFormComponent } from './product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import {ProductService} from './product-list/product.service';
import { UniqueIdDirective } from './product-form/unique-id.directive';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    UniqueIdDirective,
  ],
  imports: [
    BrowserModule,
    CartModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
