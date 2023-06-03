import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async createUser(body: CreateUserDto) {
    const { name, phone, email, addres } = body;
    const findUser = await this.userRepo.find({
      where: {
        phone: phone,
      },
    });
    if (findUser.length)
      throw new HttpException(
        'User with this phone is already exist',
        HttpStatus.CONFLICT,
      );
    const user = this.userRepo.create({ name, phone, email, addres });
    return this.userRepo.save(user);;
  }
}
