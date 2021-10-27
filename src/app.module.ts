import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';
import { join } from 'path';
@Module({
  imports: [
    ProductModule,
    UserModule,
    StoreModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
      playground: true,
      installSubscriptionHandlers: true,
    }),
    MongooseModule.forRoot(
      'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false/nesttest',
    ),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
