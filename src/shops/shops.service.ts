import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from 'src/entities/shop.entity';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop) 
    private shopRepo: Repository<Shop>,
    @InjectRepository(Product)
    private productRepo: Repository<Product>) {}

  getAllShops(){
    const shops = this.shopRepo.find();
    return shops;
  }

  getProductsByShopId(shopId:string){
    const products = this.productRepo.find({
      relations: {
        shop: false,
      },
      where: {
        shop: {
          id: parseInt(shopId),
        },
      },
    });
    return products;
  }
}
