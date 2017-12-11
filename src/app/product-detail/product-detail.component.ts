import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Product} from '../product';
import {forEach} from '@angular/router/src/utils/collection';
import {IButton} from 'selenium-webdriver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  @Output()
  deleteProduct = new EventEmitter<Product>();

  requestDelete(){
    this.deleteProduct.emit(this.product);
    this.product = null;
  }



}
