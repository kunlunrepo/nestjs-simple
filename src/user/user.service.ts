import { Injectable } from '@nestjs/common';

// 逻辑层
@Injectable()
export class UserService {
  // 查询用户列表
  getUsers(): any {
    return {
      code: 0,
      data: [],
      msg: '请求成功',
    };
  }

  // 新增用户
  addUser(): any {
    return {
      code: 0,
      data: {},
      msg: '新增用户成功',
    };
  }

}
