# 远程调试

## 一.以Spring Boot项目为例

（本地模拟远程调试）

#### 1.创建Spring Boot项目

参考之前文章[Intellij IDEA 创建Spring Boot项目](https://github.com/coder-kk596/mdFiles/blob/master/IDEA%E5%88%9B%E5%BB%BASpringBoot%E9%A1%B9%E7%9B%AE.md)



#### 2.maven打包-jar包

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%888.07.15.png?raw=true)

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%888.13.19.png?raw=true)



`target`目录下生成项目jar包

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%888.17.44.png?raw=true)



配置本地连接远程服务器debug端口

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%888.24.19.png?raw=true)



![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%888.41.53.png?raw=true)



![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%8811.56.10.png?raw=true)



复制图中JVM参数，`apply` `ok`

 `-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005`

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-16%20%E4%B8%8B%E5%8D%8811.58.49.png?raw=true)



打开终端，进入`target`目录：

`cd target`

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-17%20%E4%B8%8A%E5%8D%8812.06.01.png?raw=true)



启动Spring boot的命令 `java -jar xxx.jar`

根据之前获得JVM参数以及打包的jar包，执行命令进行监听：

`java -jar -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005 springbootpro-0.0.1-SNAPSHOT.jar `

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-17%20%E4%B8%8A%E5%8D%8812.09.33.png?raw=true)



监听成功

进行debug

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-17%20%E4%B8%8A%E5%8D%8812.14.07.png?raw=true)

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-17%20%E4%B8%8A%E5%8D%8812.16.22.png?raw=true)



浏览器访问地址：`localhost:8899/hello`

即可对项目进行远程调试：

![alt](https://github.com/coder-kk596/md_img/blob/master/springbootremote_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-17%20%E4%B8%8A%E5%8D%8812.18.10.png?raw=true)



