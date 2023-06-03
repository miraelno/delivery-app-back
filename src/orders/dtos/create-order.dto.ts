import { IsArray, IsNotEmpty, IsObject } from 'class-validator';
import { User } from 'src/entities/user.entity';

export class CreateOrderDto {
  @IsObject()
  user: User;
  @IsArray()
  orderItems: [
    {
      productId: number;
      quantity: number;
    },
  ];
}
