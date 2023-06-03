import { Controller, Get, Param, Query } from '@nestjs/common';
import { ShopsService } from './shops.service';

@Controller('shops')
export class ShopsController {
  constructor(private shopService: ShopsService) {}

  @Get()
  getAllShops() {
    return this.shopService.getAllShops();
  }

  @Get('/:id/products')
  getProductsByShopId(@Param('id') id:string) {
    return this.shopService.getProductsByShopId(id);
  }
}
