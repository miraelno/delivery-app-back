import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/create')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body.name,body.phone,body.email,body.addres);
  }
}
