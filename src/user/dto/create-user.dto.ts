import { IsEmail, IsMobilePhone, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsMobilePhone('uk-UA')
  phone: string;
  @IsEmail()
  email: string;
  @IsString()
  addres: string;
}
