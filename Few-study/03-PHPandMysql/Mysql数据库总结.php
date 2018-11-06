<?php

增删改查**

1. 插入数据 insert

```sql
-- insert into 表名 (字段列表) values (值列表)
insert into book (name,author,category,price) values ('天龙八部','金庸','文学',20)
```

1. 修改数据update

```sql
-- update 表名 set 字段名称1=值1,字段名称2=值2,... where 条件
-- 如果不加条件会修改表中所有对应的字段
update book set name='笑傲江湖',price='30' where id=10
```

1. 删除数据delete

```sql
-- delete from 表名 where 条件
delete from book -- 会删除所有数据
delete from book where id=10
```

1. 查询数据select

```sql
-- select 字段列表 from 表名
select name, author from book -- 只查询表中name和author的信息 
-- select * from 表名 where 条件  *表示所有字段
select * from book where author='金庸' and price>20
```

# SQL高级

- where 条件

  查询时，不添加 where 条件,  返回数据表所有行。需要添加限定条件，只返回需要的行。

  select  字段列表 from  table where 条件；

  ```sql
  -- 条件 : =, >, <, >=, <=, and, or  
  ```

  ​

- Like 模糊匹配  % 通配符

  ```sql
  -- 查找姓张的人
  select * from 表名 where name like '张%';
  ```

  ​

- in 语法：一次查询多个符合条件的数据

  ```sql
  select * from 表名 where  字段 in  (value1,value2,value3);
  示例:
  select * from stu1 where name in ('zs', 'ls', 'ww'); -- 查找name值为zs, ls, ww 的数据
  ```



- count()  获取返回数据的总条数

  ```sql
  表名-- 查询满足条件数据的总条数	
  select count(*) from 表名 where 条件
  ```



- 排序

  ```sql
  select * from 表名 order by  字段名称;   	  	默认升序
  select * from 表名 order by  age;  -- 按照年龄来排序
  select * from 表名 order by 字段名称 desc;      降序
  ```

  ​

- limit 对结果集进行截取 一般用于取数据的前几条

  ```sql
  select *  from  表名  limit 截取的起始索引，截取的长度 
  ```

  ​

- 联合查询（多个表联合查询）

  ```sql
  select 字段列表  from  表A  join 表B  on  表A.字段=表B.字段 
  
  join 将表A和表B联合起来
  on  根据什么字段把表A和表B联合起来
  
  select *  from  teacher  join class  on class.id=teacher.classid;  -- 老师表和班级表联合查询
  select teacher.*, class.classname  from  teacher  join class  on class.id=teacher.classid;   -- 老师表和班级表联合查询,但只显示老师表的全部内容和班级表的名称
  
  -- 注意: 多表联合查询时,字段要写明是那个表的字段 如  表.字段名
  ```

  ​





?>