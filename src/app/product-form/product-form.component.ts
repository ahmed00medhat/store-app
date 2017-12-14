import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product-list/product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }


  submit(myform) {
    this.productService.addProduct(new Product(myform.id, myform.name, myform.price, myform.description));
  }
}
