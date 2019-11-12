# Wireshark模块介绍



## 一.窗口简介

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%886.47.31.png?raw=true)





## 二.过滤器使用

### 1.捕获过滤器

概念：**当进行数据包捕获时，只有那些满足给定的包含/排除表达式的数据包或被捕获**。

如何打开捕获过滤器：

（1）打开Wireshark时

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%881.15.37.png?raw=true)

（2）使用Wireshark过程中，点击设置按钮，也可打开捕获过滤器界面。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%881.19.03.png?raw=true)

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%881.22.54.png?raw=true)

操作实例一：

捕获过滤器中输入表达式 `host www.163.com and port 80`(80 等效于http)

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%881.53.06.png?raw=true)

点击start按钮开始

浏览器访问`www.163.com`

Wireshark进行抓包，显示如下：

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%881.55.44.png?raw=true)



### 2.显示过滤器

概念：**该过滤器根据指定的表达式用于在一个已捕获的数据包集合中，隐藏不想显示的数据包，或者只显示那些需要的数据包。**



![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%882.03.42.png?raw=true)

![alt](/Users/coder/Desktop/wireshark_img/屏幕快照 2019-07-14 上午12.13.04.png)



操作实例一：

捕获过滤器中筛选了满足 `host www.163.com and port 80` 表达式的数据包。

在显示过滤器中输入表达式 `tcp.stream eq 0` 筛选出第一个TCP流（包含完整的一次TCP连接：三次握手和四次握手）

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8A%E5%8D%8812.13.04.png?raw=true)



**三次握手抓包**

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%882.25.40.png?raw=true) 



#### TCP三次握手

什么是三次握手（Three-way Handshake）

三次握手，是指建立一个TCP连接时，需要客户端和服务器总共发三个包。三次握手的目的是连接服务器指定端口，建立TCP连接，并同步连接双方的序列号和确认号并交换TCP窗口大小信息。



![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%883.35.06.png?raw=true)



**第一次握手**：客户端发送syn包（syn=x）的数据包到服务器，并进入`SYN_SEND`状态，等待服务器确认；

**第二次握手**：服务器收到syn包，必须确认客户的SYN（ack=x+1），同时自己也发送一个SYN包（syn=y），即SYN+ACK包，此时服务器进入`SYN_RECV`状态；

**第三次握手**：客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=y+1)，此包发送完毕，客户端和服务器进入`ESTABLISHED`状态，完成三次握手。



**握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据**。理想状态下，TCP连接一旦建立，在通信双方中的任何一方主动关闭连接之前，TCP连接都将被一直保持下去。



#### Wireshark三次握手过程：

（1）第一次握手数据包

客户端发送一个TCP，标志位为SYN(syn=0)，序列号为0，代表客户端请求建立连接。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%882.34.07.png?raw=true)

（2）第二次握手数据包

服务器收到SYN包后，确认客户端的SYN，ack=x+1，同时向客户端发送自己的SYN(syn=y)包，即最后会向客户端发送SYN+ACK包。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%882.48.01.png?raw=true)



（3）第三次握手数据包

客户端收到SYN+ACK包后，向服务器发送确认包ACK(ack=y+1)。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-14%20%E4%B8%8B%E5%8D%883.23.45.png?raw=true)





## 三.封包

### 什么是封包

计算机只能识别二进制的数据，数据也是用二进制的方式存储在计算机中。要想实现多台计算机之间的通信，就要依赖一定的通信协议，如TCP/IP//HTTP等网络协议。为了区分每个协议，数据在传输过程中，会被用到的协议加上指定的格式。也可以理解为对数据的打包发送。例如：快递人员要把你购买的东西送到你家，就要先包装好，然后加上你的个人信息，最后送到你手中，整个过程称为封包。

### Wireshark封包

点击Wireshark ![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%882.04.15.png?raw=true) 按钮，开始抓包。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%881.52.06.png?raw=true)



#### 1.封包详细信息（Packet Details Pane)

显示封包中的字段

__Frame（帧）__：__物理层的数据帧概况__ （对应OSI七层模型中的物理层）。 _Frame 494_ 指的是要发送的数据块，_494_为所抓帧的序号，捕获字节数等于传送字节数：_62 bytes_。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%881.58.45.png?raw=true)

------

__Ethernet II（以太网）__：__数据链路层以太网帧头部信息__(对应OSI七层模型中的数据链路层)。源Mac地址：*2a:31:66:39:90:27* ; 目标Mac地址:  *38:f9:d3:84:41:e4*

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%881.59.25.png?raw=true)

------

__Internet Protocal Version 4（IPV4协议，也称网际协议）__: **互联网层IP包头部信息**（对应OSI七层模型中的网络层）。源IP地址：*203.119.129.47* ; 目标IP地址:  *192.168.43.91*

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%881.59.53.png?raw=true)

------

__Transmission Control Protocol（TCP协议）__： **传输层的数据段头部信息**（对应OSI七层模型中的传输层）。 源端口：*443*；目标端口：*51610*；序列号：*143* ； ACP: 是TCP数据包首部中的确认标志，对已接收到的TCP报文进行确认，值为1：确认号有效； 长度为0。

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%882.00.30.png?raw=true)

------

**Hypertext Transfer Protocol（HTTP协议）**：**应用层信息**（对应OSI七层模型中的应用层）。

[后续补充]

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%882.00.58.png?raw=true)





#### 2.每层封包详细含义

__物理层的数据帧概况__

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%882.30.13.png?raw=true)



**数据链路层以太网帧头部信息**

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%883.17.32.png?raw=true)



**互联网层IP包头部信息**

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%883.22.28.png?raw=true)



**传输层TCP数据段头部信息**

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-07-13%20%E4%B8%8B%E5%8D%883.38.34.png?raw=true)



**TCP头格式**

![alt](https://github.com/coder-kk596/md_img/blob/master/wireshark_img/731719-20160520221735216-981482756.png?raw=true)







# Wireshark过滤规则

使用过滤器





## 1.过滤IP

**来源IP** 或者 **目标IP** 等于某个IP

`ip.src eq 192.168.43.91`  (来源)

`ip.dst eq 192.168.43.91`  (目标)

`ip.addr eq 192.168.43.91`  (来源、目标同时显示)



## 2.过滤端口

显示来源端口和目标端口同时满足条件

`tcp.port eq 80`

`tcp.port == 80`

`tcp.port eq 80 or udp.port eq 80`



显示目标端口满足条件

`tcp.dstport == 80`



显示来源端口满足条件

`tcp.srcport == 80`



过滤端口范围

`tcp.port >=1 and tcp.port <= 80`



 1. 协议过滤

比如TCP，只显示TCP协议。

2. IP 过滤

比如 ip.src ==192.168.1.102 显示源地址为192.168.1.102，

ip.dst==192.168.1.102, 目标地址为192.168.1.102

3. 端口过滤

tcp.port ==80,  端口为80的

tcp.srcport == 80,  只显示TCP协议的愿端口为80的。

4. Http模式过滤

http.request.method=="GET",   只显示HTTP GET方法的。

5. 逻辑运算符为 AND/ OR



