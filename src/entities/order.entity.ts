import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { OrderItem } from './orderItem.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User)
  user: User;
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true, onDelete: "CASCADE" })
  items: OrderItem[];
}
