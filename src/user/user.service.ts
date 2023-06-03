import { Injectable } from '@nestjs/common';
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

  createUser(body: CreateUserDto) {
    const user = new User();
    try {
        if(this.userRepo.find({
            where:{
                phone: body.phone
            }
        })) throw new Error("User exist")
    } catch (error) {
        error.message();
    }
    console.log(body);
  }
}
