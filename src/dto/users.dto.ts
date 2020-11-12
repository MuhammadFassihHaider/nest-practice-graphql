import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
@Field()
readonly id:string
@Field()
readonly username:string
@Field()
readonly password:string
@Field()
readonly orderCount:number
}