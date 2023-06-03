import { IsArray, IsNotEmpty } from 'class-validator';
import { User } from 'src/entities/user.entity';

export class CreateOrderDto {
  @IsNotEmpty()
  user: User;
  @IsArray()
  orderItems: [
    {
      productId: number;
      quantity: number;
    },
  ];
}
