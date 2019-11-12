# php fpm镜像

用于禅道部署或者其他php程序部署的基础镜像。   
此镜像做了如下优化：

- 优化进程池参数
- 根目录修改为**/var/www/html**
- 设置listen地址0.0.0.0:9000
- log level设置为warning
- 重启机制优化

## 构建脚本

```
  docker build -t lidig-php:7.2-fpm-alpine .
```
