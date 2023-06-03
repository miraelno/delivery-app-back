import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrdersService } from './orders.service';
import { Order } from 'src/entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
  @Get(':id')
  getOrderById() {}

  @Get('/search')
  findOrders() {}

  @Post('/create')
   createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.createOrder(createOrderDto);
  }
}
