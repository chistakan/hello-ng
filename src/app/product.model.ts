export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  _id?: number;

  constructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
