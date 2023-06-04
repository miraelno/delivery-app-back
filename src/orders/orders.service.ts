import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { OrderItem } from 'src/entities/orderItem.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createOrder(orderData: CreateOrderDto) {
    //Finding the user OR creating the new one
    const { phone } = orderData.user;
    let user = await this.userRepo.findOne({
      where: {
        phone: phone,
      },
    });
    if (!user) {
      user = this.userRepo.create(orderData.user);
      await this.userRepo.save(user);
    }

    //Creating order items
    const order = new Order();
    order.user = user;
    const orderItems = [];

    for (const itemData of orderData.orderItems) {
      const product = await this.productRepo.findOne({
        where: {
          id: itemData.productId,
        },
      });
      const orderItem = new OrderItem();
      orderItem.product = product;
      orderItem.quantity = itemData.quantity;
      orderItems.push(orderItem);
    }
    order.items = orderItems;
    return this.orderRepo.save(order);
  }

  async getOrderById(id: string) {
    return this.orderRepo.findOne({
      relations: ['items'],
      where: {
        id: parseInt(id),
      },
    });
  }

  async findOrders(email: string, phone: string) {
    const result =  this.orderRepo.find({
      relations: ['items', 'user'],
      where: {
        user: {
          email,
          phone,
        },
      },
    });
    return result;
  }
}
