# 禅道镜像

- 自动更新禅道，更新版本根据环境变量下载： **ENV_ZENTAO_PMS_UPDATE_URL**, 
- 自动解压初始文件, 自动检查, /var/zentao.tar.gz, 存在中间文件/var/www/.zentaopms.update则不更新

## 构建脚本

```
  docker build -t lidig-zentao:1.0.0 .
```
