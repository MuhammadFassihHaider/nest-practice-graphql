import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductsDto {
  @Field()
  readonly id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field(() => Int)
  readonly price: number;
}

export interface Products {
  id: string;
  title: string;
  description: string;
  price: number;
}
