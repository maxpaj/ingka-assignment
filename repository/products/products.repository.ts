import { Product } from "../../models/product";
import products from "./products.json";
import { SimpleRepository } from "./repository";

export class ProductsRepository implements SimpleRepository<Product> {
  async getAll() {
    return products;
  }

  async getById(id: number) {
    const p = products.find((p) => p.id === id);

    if (!p) {
      throw new Error("Could not find product");
    }

    return p;
  }
}
