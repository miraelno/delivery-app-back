import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Shop } from './shop.entity';
import { Order } from './order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @ManyToOne(()=>Shop)
  shop: Shop;
  @ManyToMany(()=>Order, order => order.products)
  products: Order[]
}
