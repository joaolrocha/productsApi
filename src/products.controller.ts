import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
  constructor(private productsService : ProductsService) {

  }

  @Get()
  obterTodos(): Product[] {
    return this.productsService.obterTodos();
  }

  @Get(':id')
  obterUm(@Param() params): Product {
    return this.productsService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Product) {
    produto.id = 100;
    this.productsService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Product): Product {
    return this.productsService.alterar(produto);
  }

  @Delete(':id')
  apagar(@Param() params){
    this.productsService.apagar(params.id);
  }
}
