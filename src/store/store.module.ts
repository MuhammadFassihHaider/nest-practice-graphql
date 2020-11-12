import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserServices } from "src/user/users.service";
import { StoreSchema } from "./store.model";
import { StoreResolver } from "./store.resolver";
import { StoreService } from "./store.service";
import { Users } from "../graphql";
import { UserModule } from "src/user/user.module";
@Module({
  imports: [UserModule,MongooseModule.forFeature([{name:"store", schema: StoreSchema}])],
  providers:[StoreService, StoreResolver]
})

export class StoreModule{};