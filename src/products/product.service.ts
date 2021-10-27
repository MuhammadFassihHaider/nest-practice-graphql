import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './products.model';
import { Model } from 'mongoose';
import { ProductsInput } from '../graphql';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Products') private readonly ProductModel: Model<Products>,
  ) {}
  productArray: Products[] = [];

  async createProduct(product: ProductsInput): Promise<Products> {
    console.log(product);
    const pro = new this.ProductModel(product);
    return await pro.save();
  }

  async getProdcts() {
    const allProd = await this.ProductModel.find();
    return allProd;
  }

  async getProdctsDetail(id: string) {
    const prod = await this.ProductModel.findById(id);
    if (prod) {
      return prod;
    } else {
      throw new NotFoundException();
    }
  }

  async updateProduct(id: string, title: string) {
    const productUpdate = await this.ProductModel.findById(id);
    productUpdate.title = title;
    await productUpdate.save();
    return productUpdate;
  }

  async deleteProduct(id: string) {
    await this.ProductModel.findByIdAndRemove(id).exec();
    return 'Deleted Successfully';
  }
}
