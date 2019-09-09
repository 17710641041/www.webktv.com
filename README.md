### 前端俱乐部 api 项目

> 本项目是基于node kos2的最新实战项目，是适合新手进阶的绝佳教程。代码简单易懂，注释多多。

### 项目技术架构

* node
* koa2
* mysql
* redis

### 功能列表

- [x] 登录功能完成
- [x] 注册功能完成
- [x] 图片上传完成

### 项目目录

```

├── README.md                                    // 项目说名文档
├── bin                                          // 
├── config                                       // 上线项目文件，放在服务器即可正常访问
│   ├── db.js                                    // 数据库配置文件
│   └── base.js                                  // 状态码文件
├── controllers                                  // 控制器
│   └── user.js                                  // 用户
├── libs                                         // 公共方法
│   └── common.js                                // 公共方法文件
├── modules                                      // 数据层
│   └── user.js                                  // 用户
├── public                                       // 静态文件
├── routes                                       // 路由
│   └── user.js                                  // 用户相关接口路由
├── schema                                       // 表模型
│   └── user.js                                  // 用户表模型
├── views                                        // 模板
├── app.js                                       // 项目入口文件                   
└── package.json       

