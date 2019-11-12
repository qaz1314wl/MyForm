# 坐标系

## 概述

地图服务受限于坐标系的影响，不同点位在地图上展现的位置不一样。[投影坐标系和地理坐标系概念](https://blog.csdn.net/qq_34149805/article/details/65634252)

## GPS坐标系

GPS坐标系是我们GPS设备上获取的经纬度, 别名WGS-84，EPSG4326.

## 火星坐标系
火星坐标系是中国特有的坐标系，不可逆，但能达到厘米级近似. 别名GCJ-02

## 百度坐标系

BD-09 百度坐标系，分BD09LL和BD09MC.BD09MC是百度地图采用的米制坐标， 一般在手机导航上使用。

## 高德坐标系

高德采用的是火星坐标系。

## 谷歌地图

谷歌地图采用的是WGS-84坐标系

## 天地图

[天地图](http://lbs.tianditu.com/home.html)采用的是GPS坐标系，投影方式采用EPSG:900913

## leaflet

leaflet是开源的前端库，目前使用的版本是1.3.4, 它默认的坐标系是WGS-84,投影方式是EPSG3857


## 附录

### 坐标转换

- [proj4js](http://proj4js.org/)
- [gcoord](https://github.com/hujiulong/gcoord)


### 前端地图库

- [leaflet](https://leafletjs.com/)
