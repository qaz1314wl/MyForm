# protobuf 3使用教程

## 风格

### 文件格式

- 保持行长为80个字符
- 使用2个空格缩进

### 文件名
lower_snake_case.proto

### 文件结构

- license
- 文件预览
- syntax（指定使用2还是3版本）
- package(包名)
- imports(导入)
- 文件相关内容(如Message等)
- 其他内容

### 目录结构与包名

```
名称应为小写，并且应与目录层次结构相对应。例如，如果文件在其中my/package/，则软件包名称应为my.package。
```

### Message和字段名

```
Message使用CamelCase(大写字母开头)
字段名使用underscore_separated_names

message SongServerRequest {
  required string song_name = 1;
}

如果字段名中含有数字，数字应和单词和在一起，而非通过下划线分开
如使用song_name1替换song_name_1
```

### 重复字段

```
使用复数的形式代表重复字段

repeated string keys = 1;
repeated MyMessage accounts = 17;
```

### 枚举

```
枚举类型名称使用CamelCase（大写字母开头）
每个枚举值应该以分号结束,而不是一个逗号
优先为枚举值添加前缀，而不是将其包含在封闭消息中。
零值枚举应带有后缀。

enum Foo {
  FOO_UNSPECIFIED = 0;
  FOO_FIRST_VALUE = 1;
  FOO_SECOND_VALUE = 2;
}
```

## Service

```
使用CamelCase（以大写字母开头）作为服务名称和任何RPC方法名称

service FooService {
  rpc GetSomething(FooRequest) returns (FooResponse);
}
```

## 语法

### 类型映射

proto type|java type|备注|
----|----|----|
double|double||
float|float||
int32|int|使用可变长度编码。负数编码效率低下–如果您的字段可能具有负值，请改用sint32|
int64|long|使用可变长度编码。负数编码效率低下–如果您的字段可能具有负值，请改用sint64。|
uint32|int|使用可变长度编码。|
uint64|long|使用可变长度编码。|
sint32|int|使用可变长度编码。有符号的int值。与常规int32相比，它们更有效地编码负数。|
sint64|long|使用可变长度编码。有符号的int值。与常规int64相比，它们更有效地编码负数。|
fixed32|int|始终为四个字节。如果值通常大于2^28，则比uint32更有效。|
fixed64|long|始终为八个字节。如果值通常大于2^56，则比uint64更有效。|
sfixed32|int|始终为四个字节。|
sfixed64|long|始终为八个字节。|
bool|boolean||
string|String|字符串必须始终包含UTF-8编码或7位ASCII文本，并且不能超过2^32|
bytes|ByteString|可以包含不超过2^32的任意字节序列|

### 默认值
- string，默认值为空字符串
- bytes，默认值为空字节
- bool，默认值为false
- numeric，默认值为0
- enums, 第一个定义的枚举值，0
- message,未设置，跟开发语言有关
- repeated，默认值为空

### enum

```
message SearchRequest {
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
  enum Corpus {
    UNIVERSAL = 0;
    WEB = 1;
    IMAGES = 2;
    LOCAL = 3;
    NEWS = 4;
    PRODUCTS = 5;
    VIDEO = 6;
  }
  Corpus corpus = 4;
}
```
**每个枚举类型定义必须包含为0的元素且必须放置在首位**

- allow_alias：取别名
  
```
//the right way
enum EnumAllowingAlias {
  option allow_alias = true;
  UNKNOWN = 0;
  STARTED = 1;
  RUNNING = 1;
}
//the error way
enum EnumNotAllowingAlias {
  UNKNOWN = 0;
  STARTED = 1;
  // RUNNING = 1;  // Uncommenting this line will cause a compile error inside Google and a warning message outside.
}
```

**取值范围32-bit integer**
**使用可变长度编码，负数编码效率低下，不推荐使用**
**可定义在message中，也可在message外，message中可通过MessageType.EnumType使用**

- 保留值

**如果通过完全删除枚举条目或将其注释掉来更新枚举类型，则将来的用户在自己对类型进行更新时可以重用数值。如果他们以后加载旧版本的proto，可能会导致严重的问题.proto，包括数据损坏，隐私错误等。确保不会发生这种情况的一种方法是，将已删除的条目的数字值或名称，可能导致JSON序列化的问题，指定为reserved**

```
// max代表最大值
enum Foo {
  reserved 2, 15, 9 to 11, 40 to max;
  reserved "FOO", "BAR";
}
//数值和名称不能放在同个reserved中
```
### 使用其他类型message

- 同一个.proto中

```
message SearchResponse {
  repeated Result results = 1;
}

message Result {
  string url = 1;
  string title = 2;
  repeated string snippets = 3;
}
```

- 导入其他文件，即不同的.proto文件

```
import "myproject/other_protos.proto";
```

- 虚拟proto
  
  ```
  //old.proto被多个文件引用，现在old.proto被移到其它目录中，原先引用该目录的
  //文件都得修改，这样比较麻烦，可通过虚拟proto的方式，将旧的文件引导到新的位置上
  // new.proto

  //old.proto
  import public "new.proto";

  //client.proto
  import "old.proto"
  ```
**搜索路径通过--proto_path指定，未指定为当前编译调用的位置**

  - proto2 message type
  
  **可以直接在proto3中导入并使用proto2的message Type，但是枚举例外**

### 内部类型

```
message SearchResponse {
  message Result {
    string url = 1;
    string title = 2;
    repeated string snippets = 3;
  }
  repeated Result results = 1;
}
```

**可通过Parent.Type的方式使用**

```
message SomeOtherMessage {
  SearchResponse.Result result = 1;
}
```

### 更新Message

- 不要更改任何现有字段的字段编号
-  添加新字段后，可以使用新的代码解析旧格式序列化的数据，因记住元素的默认值，同样旧的代码也可解析新格式序列化的数据，忽略新字段
-  如果该字段编码在新的文件中不在使用，可以移除该字段。但为了未来其它人员误用该数值，可能通过重命名字段（如加上前缀OBSOLETE_）,或使该数值保留
-  int32, uint32, int64, uint64,和 bool是兼容的
-  sint32和sint64兼容，但与其它整数不兼容
-  只要bytes是有效的utf-8，string和bytes是兼容的
-  如果bytes包含message的版本，内嵌message和bytes是兼容的
-  fixed32 和sfixed32,fixed64和sfixed64是兼容的
-  enum 与int32, uint32, int64,和uint64是兼容的，当时须注意不同的客户端反序列化的处理是不一样的
-  单值改为新的oneof是安全的且二进制是兼容的。如果确认一次中对多个字段的设值不超过一个，那么移动多个字段到新的oneof是安全的。移动任一字段到已存在的oneof中是不安全

### 未知字段

**序列化数据中代表的字段解析器不能识别**

### Any

**须要导入google/protobuf/any.proto**

```
import "google/protobuf/any.proto";

message ErrorStatus {
  string message = 1;
  repeated google.protobuf.Any details = 2;
}
```
**可以让你不用定义就像内嵌类型一样使用**

### oneof

**根据语言不同，可通过case()或WhiceOneof()校验oneof设置了哪个字段**

```
message SampleMessage {
  oneof test_oneof {
    string name = 4;
    SubMessage sub_message = 9;
  }
}
```
**不能在oneof中使用repeated**

#### 特性
- 设置oneof中莫一字段的值会自动清除oneof其它成员，即只有最后一次有效

```
SampleMessage message;
message.set_name("name");
CHECK(message.has_name());
message.mutable_sub_message();   // Will clear name field.
CHECK(!message.has_name());
```
- 如果解析时碰到oneof中有多个成员，仅最后一个会被解析
- oneof不可使用repeated
- 可以使用反射API
- 如果oneof的某个成员设置了默认值，该值将会被序列化
- 使用c++时，注意你的代码不会造成崩溃
- 使用c++时，通过swap可以交换两个message的oneof

#### 向后兼容问题

**需要小心新增或删除oneof字段**

**标签重用**

### map

```
map < key_type ，value_type > map_field = N ;
#key_type可以是任何的整数或字符串（除了浮点型和字节型，枚举是无效的）
#value_type可以是任何类型（除了map）
```

**示例**

```
map<string, Project> projects = 3;
```

- map字段不能repeated
- map key和value排序是不确定的
- 序列化时map时根据key进行排序的。数值型key根据数值排序
- 在java中，如果value未设定，将使用默认值

### Packages

**可以在.proto文件中使用package说明符，防止消息类型冲突**

```
package foo.bar;
message Open { ... }


message Foo {
  ...
  foo.bar.Open open = 1;
  ...
}
```

**在JAVA中，除非在.proto文件中明确指定了option java_package，否则将使用package作为java的包名**

### Service

```
service SearchService {
  rpc Search (SearchRequest) returns (SearchResponse);
}
```

### JSON Mapping

**proto3开始支持**

- json转proto时，如果值不存在或为空，则使用默认值
- proto转json时，忽略默认值的字段节省空间

proto3|	JSON|	JSON example|	Notes|
----|----|----|----|
message|	object|	{"fooBar": v,"g": null,…}|json对象，字段变成json对象的key且以驼峰形式	|
enum|	string|	"FOO_BAR"|	枚举值的名|
map<K,V>|	object|	{"k": v, …}|	所有键转化为字符串|
repeated V|	array	|[v, …]	|null 等价于 []|
bool	|true, false|	true, false	||
string|	string|	"Hello World!"||	
bytes	|base64 string|	"YWJjMTIzIT8kKiYoKSctPUB+"|json值为base64编码的字符串|
int32, fixed32, uint32|	number|	1, -10, 0|	json值为十进制数值|
int64, fixed64, uint64|	string	|"1", "-10"|	json值为十进制字符串|
float, double|	number|	1.1, -10.0, 0, "NaN", "Infinity"|	json值为数值或特殊的字符串 "NaN", "Infinity", and "-Infinity"|
Any|	object|	{"@type": "url", "f": v, … }|	|
Duration|	string|	"1.000340012s", "1s"|	|
Struct|	object|	{ … }|	任一json对象|
Wrapper types|	various types|	2, "2", "foo", true, "true", null, 0, …|	在JSON中使用与包装后的原始类型相同的表示形式，但null在数据转换和传输期间允许并保留该表示形式|
FieldMask|	string|	"f.fooBar,h"|	|
ListValue|	array|	[foo, bar, …]	||
Value|	value||		任一json值|
NullValue|	null|||
Empty|	object|	{}|一个空的json对象|

#### 可选项【proto转json输出】

- 不省略具有默认值的字段，默认忽略
- 忽略未知字段，默认拒绝
- 使用字段名，默认lowerCamelCase
- 枚举值改为数值，默认字符串

### option

**可在google/protobuf/descriptor.proto查看**

- 文件级（顶级中，不再消息、枚举、服务定义内）
  - java_package
  ```
  option java_package = "com.example.foo";
  ```
  - java_multiple_files
  - java_outer_classname（类名，如未定义，则使用proto文件名，foo_bar.proto=>FooBar.java）
  - optimize_for（可以设置SPEED，CODE_SIZE或LITE_RUNTIME）
    - SPEED,默认值，代码高度优化
    - CODE_SIZE,生成最少的类，基于反射实现，速度慢
    - LITE_RUNTIME依赖于libprotobuf-lite而非libprotobuf，一般用在受限平台上，如手机

  ```
  option optimize_for = CODE_SIZE
  ```

- 消息级（消息定义中）
- 字段级（字段定义中）
  - deprecated（表明字段弃用，在Java中，成为@Deprecated注释，可以考虑使用保留语句替换）
  
  ```
  int32 old_field = 6 [deprecated = true];
  ```