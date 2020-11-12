import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class StoreInput {
        @Field()
        readonly userID: string;
        @Field()
        readonly productID: string;
        @Field()
        readonly count: number;
        @Field()
        readonly limit: number;
}