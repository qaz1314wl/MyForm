# Gradle的安装配置及基础使用

## 简介
> Gradle是一个基于Apache Ant和Apache Maven概念的项目自动化建构工具。它使用一种基于Groovy的特定领域语言来声明项目设置，而不是传统的XML。当前其支持的语言限于Java、Groovy和Scala，计划未来将支持更多的语言。

## 理解
前面介绍了Gradle是一个基于Apache Ant和Apache Maven概念的项目自动化建构工具,在企业级开发中,Ant可以帮助你用xml的形式写成脚本,帮助你自动打包而不用手动重复操作,而Maven则是在开发中需要引入许许多多的jar包,比如log4j,spring,mybatis等,而每个jar包又有许多不同的版本,如果不是一一对应的版本就可能导致你运行或者编译失败,Maven可以帮助你自动下载你所需要的jar包,自定义不同的版本号,让你专心于开发而不是在找jar包上浪费时间,但这两个工具只是各有各的功能在开发中都必须用到一起装和配置就很麻烦,所以诞生了Gradle,这个可以干Ant和Maven两个工具的活的工具,因为基于groove语言,甚至配置语句还要简单不少.

## Gradle的下载及安装配置

### 下载
在官方网站下载最新版,目前是5.5.1
https://gradle.org/releases/

### 安装及配置

#### 安装
安装可以尽量选在默认目录,和JAVA一样即可,配置的时候也可以方便一些

#### 配置环境变量
开环境配置，新建系统环境“GRADLE_HOME”,值为D:\soft\gradle\gradle-4.8,找到path变量，后面添加%GRADLE_HOME%\bin;

### 测试
在cmd命令行里输入gradle -v如果能打出版本号，说明环境配置成功

## 基础使用

### 在IDEA中创建一个gradle构建的java web项目
最新版的IDEA默认集成了gradle，不用安装gradle程序就可以在IDEA中创建gradle管理的项目
![此处输入图片的描述][1]


![此处输入图片的描述][2]


![此处输入图片的描述][3]


![此处输入图片的描述][4]


![此处输入图片的描述][5]


  [1]: https://img-blog.csdn.net/20180524090004175?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hdGhhbm5pdUJlZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70
  [2]: https://img-blog.csdn.net/20180524090031381?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hdGhhbm5pdUJlZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70
  [3]: https://img-blog.csdn.net/20180524090111928?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hdGhhbm5pdUJlZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70
  [4]: https://img-blog.csdn.net/20180524090141734?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hdGhhbm5pdUJlZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70
  [5]: https://img-blog.csdn.net/20180524090218338?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L05hdGhhbm5pdUJlZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70
  