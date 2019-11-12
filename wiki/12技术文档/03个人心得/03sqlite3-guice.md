# SQLITE入门指南

## 工具
- sqlite3

## 常见命令

### 登录数据库

***方式一***

```
sqlite3 middleware.db
```
**其中middleware.db为数据库文件名**

***方式二***

```
# 登录sqlite3控制台
sqlite3
# 打开数据库文件
.open middleware.db
```

### 查看数据库中所有表

```
#不要在后面加；
.table
```

### 查看表结构

```
#不要在后面加；
.schema user
```
***user为表名***

### 帮助

```
.help
```
**可通过该命令参看sqlite3支持的命令及使用**

### 退出sqlite3控制台

```
.quit
```

## sqlite_master