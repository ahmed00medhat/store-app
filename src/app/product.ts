
export class Product {

  constructor(private  id: number, private name: string, private price: number, private description: string) {}

  getId() {
    return this.id;
  }

  getPrice(): number {
    return this.price;
  }
}

