import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProductsInput } from '../graphql';
import { ProductService } from './product.service';
import { Products } from '../dto/products.dto';

@Resolver()
export class ProductResolver {
  private pubSub: PubSub;
  constructor(private readonly productService: ProductService) {
    this.pubSub = new PubSub();
  }

  @Query()
  async showAllProducts() {
    const prod = await this.productService.getProdcts();
    this.pubSub.publish('productAdded', 'asda');
    return prod;
  }

  @Mutation()
  async createProduct(@Args('product') input: ProductsInput) {
    const id = await this.productService.createProduct(input);
    return id;
  }

  @Subscription(returns => String)
  productAdded() {
    return this.pubSub.asyncIterator('productAdded');
  }
}
