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
    //console.log(orderData);
    console.log(orderData.orderItems);
    const order = new Order();
    const user = new User();


    // user.name = orderData.userName;
    // user.email = orderData.email;
    // user.phone = orderData.phone;
    // user.addres = orderData.address;

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
      console.log(orderItem);
      orderItems.push(orderItem);
    }
    order.items = orderItems;
    console.log(order);
    return this.orderRepo.save(order);
  }
}
