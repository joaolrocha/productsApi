import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product("LIV01", "Livro do Harry", 29.90),
    new Product("LIV03", "Livro do Percy jackson", 39.90),
    new Product("LIV01", "Livro do GOT", 29.90),
  ];

  obterTodos(): Product[] {
    return this.products;
  }

  obterUm(id: number): Product {
    return this.products[0]
  }

  criar(product: Product) {
    this.products.push(product);
  }

  alterar(product: Product): Product {
    return product;
  }

  apagar(id: number) {
    this.products.pop();
  }
}