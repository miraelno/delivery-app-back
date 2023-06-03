import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'decimal' })
  longitude: number;
  @Column({ type: 'decimal' })
  latitude: number;
}
