import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderParticipations)
  product: Product;
}
