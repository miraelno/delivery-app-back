import { IsMobilePhone } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  @IsMobilePhone('uk-UA')
  phone: string;
  @Column()
  email: string;
  @Column()
  addres: string;
}