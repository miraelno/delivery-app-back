import { Controller, Get, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    @Get(':id')
    getOrderById(){
        
    }

    @Get('/search')
    findOrders(){

    }
    
    @Post()
    createOrder(){
        
    }
}
