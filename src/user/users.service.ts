import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './user.model';
import { Model } from 'mongoose';
import { UserInput } from '../inputs/users.input';
import { Users as UserInterface, UsersInput } from '../graphql';
import { AppGateway } from 'src/app.gateway';

@Injectable()
export class UserServices {
  constructor(
    @InjectModel('users') private readonly UserModel: Model<Users>,
    private GatewayService: AppGateway,
  ) {}

  async createUser(user: UsersInput): Promise<UserInterface> {
    const userN = new this.UserModel(user);
    const uu = await userN.save();
    this.GatewayService.wss.emit('New User', uu);

    return uu;
  }

  async userList() {
    const users = this.UserModel.find().exec();
    return users;
  }

  async getUser(id: string) {
    const user = await this.UserModel.findById(id);
    return user;
  }
}
