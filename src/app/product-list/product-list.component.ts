import {Component, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {ProductService} from './product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  @Output()
  selectedProduct: Product;

  constructor(private productService: ProductService) {

    //this.products = productService.getAllProducts();

  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => this.products = products);
  }

  delete(product: Product){
    this.products.splice(this.products.indexOf(product),1);
  }
}
