# 项目描述

Nestjs简单示例



# 依赖安装

```bash
# 安装依赖
pnpm install
```



# 项目运行

```bash
# 运行项目
$ pnpm run start:dev
```



# 组件命令

```sh
#创建module
nest g module user

#创建controller
nest g controller user --no-spec

#创建serveice
nest g service user --no-spec
```

# 生命周期

```js
客户端 -> 中间件 -> 守卫 -> 拦截器-> 管道 -> 控制器 -> 服务 -> 拦截器 -> 过滤器 -> 响应 -> 客户端
```

> [!CAUTION]
>
> 中间件：全局中间件 -> 模块中间件
>
> 守卫：全局守卫 -> 控制器守卫 -> 路由守卫
>
> 拦截器：全局拦截器pre -> 控制器拦截器pre -> 路由拦截器pre
>
> 管道：全局管道 -> 控制器管道 -> 路由管道 -> 路由参数管道
>
> 拦截器：路由拦截器post -> 控制器拦截器post -> 全局拦截器post
>
> 过滤器：路由过滤器 -> 控制器过滤器 -> 全局过滤器

# 模块

application module ->users module

application module ->orders module

application module ->chat module

> [!CAUTION]
>
> **功能模块**
>
> **共享模块**
>
> **全局模块**    配置、数据库连接、日志
>
> **动态模块**    使用时才加载，懒加载模块

