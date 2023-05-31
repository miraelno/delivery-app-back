import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
import { OrderItem } from './orderItem.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User)
  user: User;
  @ManyToOne(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];
}
