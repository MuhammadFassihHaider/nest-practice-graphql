import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from './store.model';
import { StoreInput } from '../graphql';
@Injectable()
export class StoreService {
  constructor(
    @InjectModel('store') private readonly StoreModel: Model<Store>,
  ) {}

  async storeEntery(input: StoreInput): Promise<Store> {
    const store = new this.StoreModel(input);
    return await store.save();
  }

  async showAll() {
    const store = await this.StoreModel.find().exec();
    return store;
  }
}
