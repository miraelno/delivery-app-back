import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Shop } from './shop.entity';
import { OrderItem } from './orderItem.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @ManyToOne(() => Shop)
  shop: Shop;
  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderParticipations: OrderItem[];
}
