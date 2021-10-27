import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  // @Post('create')
  // async addProducts(@Body('title') prodTitle:string,@Body('description') prodDescription:string,@Body('price') prodPrice:number ){
  //     const id = await this.productService.createProduct(prodTitle,prodDescription,prodPrice);
  //     return id
  // }

  @Get()
  async getProducts() {
    return await this.productService.getProdcts();
  }

  @Get(':id')
  async getProductsDetail(@Param('id') id: string) {
    return await this.productService.getProdctsDetail(id);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body('title') prodTitle: string,
  ) {
    return await this.productService.updateProduct(id, prodTitle);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
