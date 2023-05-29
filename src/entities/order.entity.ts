import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, ManyToMany, JoinTable  } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    total: number;
    @ManyToOne(()=>User) 
    user: User;
    @ManyToMany(()=>Product, product => product.products)
    @JoinTable()
    products: Product[]
}