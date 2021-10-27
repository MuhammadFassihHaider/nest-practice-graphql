import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductsInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => Int)
  readonly price: number;
}
