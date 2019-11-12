# nexus仓库信息

## 概述

- maven
- nexus
- docker

## 访问地址

[http://192.168.70.220:8081](http://192.168.70.220:8081)

## 帐号

|帐号 |密码 |说明|
|--|--|--|
|deployment|Deployment|拥有包上传权限|

## docker

### 推送地址

192.168.70.220:8082

### 推送

**须登录**

- linux

```
docker login -u deployment -p Deploy1024 192.168.70.220:8082
docker push 192.168.70.220:8082/alpine:3.10
```
### 拉取

**匿名**

- linux

在/etc/docker/daemon.json文件中添加如下内容

{"insecure-registries":["192.168.70.220:8082"]}

```
docker pull 192.168.70.220:8082/alpine:3.10
```
