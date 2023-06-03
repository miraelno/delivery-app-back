import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsController } from './shops.controller';
import { ShopsService } from './shops.service';
import { Shop } from '../entities/shop.entity';
import { Product } from 'src/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Product])],
  controllers: [ShopsController],
  providers: [ShopsService],
})
export class ShopsModule {}
