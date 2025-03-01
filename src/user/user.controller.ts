import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { PaginationDto } from 'src/DTO/Pagination.dto';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private _userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this._userService.createUser(createUserDto);
  }

  @Get()
  async getAllUser(@Query() paginationDto: PaginationDto): Promise<User[]> {
    return this._userService.users(paginationDto);
  }
  @Get()
  async getActivatedUsers(): Promise<User[]> {
    return this._userService.users({
      where: {
        activated: true,
      },
    });
  }
  @Get()
  async getDeActivatedUsers(): Promise<User[]> {
    return this._userService.users({
      where: {
        activated: false,
      },
    });
  }

  @Get('/search/:searchString')
  async getUsersBySearch(
    @Param('searchString') searchString: string,
  ): Promise<User[]> {
    return this._userService.users({
      where: {
        OR: [
          {
            firstName: { contains: searchString },
          },
          {
            familyName: { contains: searchString },
          },
          {
            email: { contains: searchString },
          },
        ],
      },
    });
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this._userService.deleteUser({ id });
  }
}
