# 禅道内部部署

禅道镜像支持自动升级机制，此机制依据环境变量以及挂载的数据。

##  配置configMap

configMap下名称为zentao的配置项，里面包含两个文件：

- zentao.conf 用于nginx里面跳转链接的
- zentaopms.tar.xz 用于自动初始化禅道源代码文件夹

## 环境变量
需要配置pod的环境变量.

- ENV_ZENTAO_PMS_UPDATE_URL需要升级到的**禅道源代码**下载地址
