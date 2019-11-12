# LDAP

[LDAP](https://ldap.com)是一款轻量的目录管理中间件，研发团队内部用户管理内部系统的帐号，未来可作为
公司层面内部系统帐号管理的中间件。  

## LDAP server

目前选用[openldap](https://www.openldap.org)作为LDAP服务器。

### 公用配置

由于使用了LDAP的一些标准定义，所以必须使用如下schema：  

1. core.schema
1. cosine.schema
1. inetorgperson.schema


## LIDF文件

LIDF文件是LDAP用于数据交换的格式文件。  


## 使用方法

使用流程：  

1. 定义LIDF文件
1. 使用命令新增/修改/删除数据

### 预定义说明

文件                                              | 备注
--                                                | --
[lidig.lidf](./defs/lidig.lidf)                   | 立地总公司定义
[lidig-dev.lidf](./defs/lidig-dev.lidf)           | 立地公司研发部门定义
[lidig-employee.lidf](./defs/lidig-employee.lidf) | 立地公司员工定义

### 命令

#### 增加entry

```
  ldapadd -x -h [host] -p [port] -D 'dc=lidig,dc=com' -w[secret] -f [LIDF文件]
```

#### 搜索entry

```
  ldapsearch -x -h [host] -p [port] -w[secret] -D 'dc=lidig,dc=com'  -b 'dc=lidig,dc=com' '(objectclass=*)'
```
