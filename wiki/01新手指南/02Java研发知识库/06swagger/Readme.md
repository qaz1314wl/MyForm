# Swagger 接口文档

[Swagger](https://swagger.io/)是一款标准的接口文档书写工具，主要支持RESTFull风格的接口设计并支持在线测试。
Swagger支持两种方式的文档编写： 1. YAML的格式， 2.Java注解。为了减少Java程序员因懒惰造成的文档编写问题
以及前后端统一接口编写语言，同时前端也能书写接口文档。基于以上几点原因，选择基于YAML格式文档编写的
方式。[OpenAPI](https://swagger.io/resources/open-api/)是Swagger定义的接口编写标准。

## Docker 镜像

Docker镜像用于展示项目内的接口文档，只须把接口定义文档挂载到制定目录即可。详情请见[这里](https://github.com/oopschen/swagger-autodoc)。
Docker Compose文件编写规则见[这里](./docker-compose.yml)。用如下命令启动即可查看样例.

```
  docker-compose up -d
```

访问[本地](http://localhost:8082)即可访问文档页面。

## Swagger Editor
[Swagger Editor](https://swagger.io/tools/swagger-editor/)是所见即所得的编写工具。公司内网地址[戳这里](http://192.168.70.228:9900/).


## 常见接口编写方式

所有接口定义都在文件[example.yml](./misc/apidoc/example.yml)


### Get请求Query参数
访问地址是**example/person**，该例子阐述了在get请求中使用query方式传参包含必填和非必填参数，返回有实际例子和对象的拼接重用。

### Get请求Json参数
访问地址是**example/person**，该例子阐述了在get请求中使用json方式传参包含必填和非必填参数，返回有实际例子和对象的拼接重用。这里有个bug，json格式无法像其他一样浏览，必须写example，界面上能渲染model信息。



### Get请求Path参数
访问地址是**example/person/{id}**，该例子阐述了在get请求中使用query方式传参包含必填和非必填参数，返回有实际例子和对象的拼接重用。

### Post请求Form表单提交
访问地址是**example/person/form**，该例子阐述了在get请求中使用form方式传参包含必填和非必填参数，返回有实际例子和对象的拼接重用。

### Post请求Json参数
访问地址是**example/person**，该例子阐述了在post请求中使用json方式传输查询参数,查询参数必填约束，返回有实际例子和对象的拼接重用。

### 文件上传（Multipart)
访问地址是**example/file**，该例子阐述了在post请求中使用multipart方式上传文件。

### Put请求
访问地址是**example/person/put-method**，该例子阐述了在put请求中使用query方式传参。

### Delete请求
访问地址是**example/person/{personID}**，该例子阐述了在delete请求。

### 请求认证
访问地址是**example/person/{personID}**，该例子阐述了方法需要权限验证，定义在components/securitySchemes下。

### 模型继承
见定义ExtendedEntity.
