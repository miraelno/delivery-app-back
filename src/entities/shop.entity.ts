import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  longitude: number;
  @Column()
  latitude: number;
}
