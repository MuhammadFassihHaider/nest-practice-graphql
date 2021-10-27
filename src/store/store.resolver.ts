import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  ResolveProperty,
  Resolver,
} from '@nestjs/graphql';
import { StoreService } from './store.service';
import { StoreInput, Store } from '../graphql';
import { Users } from '../graphql';
import { UserServices } from 'src/user/users.service';
@Resolver()
export class StoreResolver {
  constructor(
    private readonly storeService: StoreService,
    private readonly userService: UserServices,
  ) {}

  @ResolveField('user')
  @Resolver('Store')
  async userInfo(@Parent() obj): Promise<Users> {
    const userFound = this.userService.getUser(obj.userID);
    console.log('xxxx', userFound);
    return userFound;
  }

  @Mutation()
  async storeEntery(@Args('store') input: StoreInput) {
    const store = await this.storeService.storeEntery(input);
    return store;
  }

  @Query()
  async showAllStore() {
    const store = await this.storeService.showAll();
    return store;
  }
}
