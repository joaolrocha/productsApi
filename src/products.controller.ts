import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product("LIV01", "Livro do Harry", 29.90),
    new Product("LIV03", "Livro do Percy jackson", 39.90),
    new Product("LIV01", "Livro do GOT", 29.90),
  ];

  @Get()
  obterTodos(): Product[] {
    return this.products
  }

  @Get(':id')
  obterUm(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  criar(@Body() produto: Product) {
    produto.id = 100;
    this.products.push(produto);
  }

  @Put()
  alterar(@Body() produto: Product): Product {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params){
    this.products.pop();
  }
}
