# 工具类的熟悉和使用

使用工具类的目的是为了简化编码阶段的通用逻辑编写工作，包含字符，时间，hash，数值等。Jar包查找[地址](https://mvnrepository.com/)。

工具类列表：

- org.apache.commons.lang3.time.DateUtils
- org.apache.commons.lang3.StringUtils
- org.apache.commons.lang3.math.NumberUtils
- org.apache.commons.collections4.CollectionUtils
- org.apache.commons.collections4.MapUtils
- org.apache.commons.lang3.ArrayUtils
- org.apache.commons.codec.digest.DigestUtils
- org.apache.commons.lang3.time.DateFormatUtils
- org.apache.commons.beanutils.BeanUtils

## Json序列化工具

Json序列化使用[FasterXML/jackson](https://github.com/FasterXML/jackson),
具体使用类**com.fasterxml.jackson.databind.ObjectMapper**.

## Http工具

- [Retrofit](https://square.github.io/retrofit/)
- [HttpComponent](http://hc.apache.org/)
