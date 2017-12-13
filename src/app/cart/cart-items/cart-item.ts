import {Product} from '../../product';

export class CartItem {

  constructor(private product: Product, private qty: number = 0) {}

  getItem(): Product {
    return this.product;
  }

  public getQty(): number {
    return this.qty;
  }

  incQty(): void {
    this.qty++;
  }
}
