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

  async createUser(name: string, phone: string, email: string, addres: string) {
    try {
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
    } catch (error) {
      throw error;
    }
    const user = this.userRepo.create({ name, phone, email, addres });
    return this.userRepo.save(user);
  }
}
