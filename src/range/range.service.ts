import { Injectable } from '@nestjs/common';

@Injectable()
export class RangeService {
  // 获取参数
  getParams(params: number) {
    const arrs: string[] = [];
    for (let i = 0; i <= params; i++) {
      arrs.push(i.toString());
    }
    return {
      code: 0,
      data: arrs,
      msg: '请求成功',
    };
  }
}
