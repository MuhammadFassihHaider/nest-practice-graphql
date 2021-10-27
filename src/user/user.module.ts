import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppGateway } from 'src/app.gateway';
import { UserSchema } from './user.model';
import { UserResolver } from './user.resolver';
import { UserServices } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  providers: [UserServices, UserResolver, AppGateway],
  exports: [UserServices],
})
export class UserModule {}
