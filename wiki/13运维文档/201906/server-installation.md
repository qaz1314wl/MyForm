# 服务器安装规范

## 概述

本文档规范服务器安装规范,使用[脚本](./server-installation-script)一键配置
相关参数, 脚本运行环境需要Bash 4.0+。

信息 | 内容
--   | --:
作者 | 陈磊
日期 | 2019.06.13


## 详述

操作系统采用**Centos 7.3+ 64bit的服务器**版本，安装脚本采用默认值和询问的方式安装。主要内容包括如下方面。  
本规范包含一系列脚本：  

* [通用配置脚本](./server-installation-script/common-centos-64-server.sh)
* [dockerCE容器化配置脚本](./server-installation-script/container-docker-ce.sh)
* [K8s容器化配置脚本](./server-installation-script/container-k8s.sh)

### 软件源

默认采用ali云镜像, 保活。

环境变量      | 默认值
--            | --
YUM_REPO_BASE | http://mirrors.aliyun.com/repo/
YUM_REPO_EPEL | http://mirrors.aliyun.com/repo/

### 时间

配置服务器时区和时间同步服务。

环境变量  | 默认值
--        | --
SYSTEM_TZ | Asia/Shanghai

### 用户

为了避免使用root用户，新建ldkj用户，密码默认为**ldkj@{yyyyMM}**。  


### 启动服务

系统默认的启动服务。

#### SSH

* 默认不起用DNS查询
* 端口变更
* 不允许root远程登录

环境变量  | 默认值
--        | --
SSHD_PORT | 2222


#### 时间同步服务

默认启动

### 防火墙

防火墙采用firewalld，如下列举几个常用的例子：  

命令                                                        | 目的
--                                                          | --
firewall-cmd --zone=public --add-port=12345/tcp --permanent | 在公用网络上开放12345端口，允许tcp通信

### 系统参数

系统参数包含网络参数，权限参数，ulimit参数等。

## 网络参数

net.ipv4.tcp_synack_retries     = 2  
net.ipv4.ip_local_port_range    = 2000 65535  
net.ipv4.tcp_rfc1337            = 1  
net.ipv4.tcp_fin_timeout        = 15  
net.ipv4.tcp_keepalive_time     = 300  
net.ipv4.tcp_keepalive_probes   = 5  
net.ipv4.tcp_keepalive_intvl    = 15  
net.core.rmem_default           = 31457280  
net.core.rmem_max               = 12582912  
net.core.wmem_default           = 31457280  
net.core.wmem_max               = 12582912  
net.core.somaxconn              = 4096  
net.core.netdev_max_backlog     = 65536  
net.core.optmem_max             = 25165824  
net.ipv4.tcp_mem                = 65536 131072 262144  
net.ipv4.udp_mem                = 65536 131072 262144  
net.ipv4.tcp_rmem               = 8192 87380 16777216  
net.ipv4.udp_rmem_min           = 16384  
net.ipv4.tcp_wmem               = 8192 65536 16777216  
net.ipv4.udp_wmem_min           = 16384  
net.ipv4.tcp_max_tw_buckets     = 1440000  
net.ipv4.tcp_tw_recycle         = 1  
net.ipv4.tcp_tw_reuse           = 1  
fs.file-max 1048576             = 1048576

## 系统参数
vm.swappiness             = 10  
vm.dirty_ratio            = 10  
vm.dirty_background_ratio = 2  

## 执行命令

```
  NO_READ_ENV=1 sh common-centos-64-server.sh
```
