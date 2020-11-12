import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class StoreDto {
    @Field()
    readonly id: string;
        @Field()
        readonly userID: string;
        @Field()
        readonly productID: string;
        @Field()
        readonly count: number;
        @Field()
        readonly limit: number;
}