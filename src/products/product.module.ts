import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProductSchema } from './products.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
  ],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
