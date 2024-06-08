import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RangeModule } from './range/range.module';

// 使用：Controller -> appService: AppService
// 初始化1. imports 找到 module -> providers + exports -> AppService
// 初始化2. providers -> AppService

@Module({
  imports: [UserModule, RangeModule],
  controllers: [],
  // 告诉nestjs -> 下面的class类放到DI中进行初始化
  providers: [],
  // 告诉nestjs -> 下面的class需要在其他的地方用 别人导入module时可以使用下面的service
  exports: [],
})
export class AppModule {}
