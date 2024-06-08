import { Controller, Get, Param } from '@nestjs/common';
import { RangeService } from './range.service';

@Controller('range')
export class RangeController {
  constructor(private rangeService: RangeService) {}

  // 获取参数
  @Get('get/:params')
  getParams(@Param('params') params: number) {
    return this.rangeService.getParams(params);
  }
}
