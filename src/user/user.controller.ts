import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

// 控制层
@Controller('user')
export class UserController {
  // 注入服务
  constructor(private userService: UserService) {}

  // 查询用户列表
  @Get('getUser')
  getUser(): any {
    return this.userService.getUsers();
  }

  // 新增用户
  @Post('addUser')
  addUser(): any {
    return this.userService.addUser();
  }
}
