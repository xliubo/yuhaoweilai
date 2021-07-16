# 专题1 函数

## 考查方向



~~~mermaid
graph LR
a(函数)-->b1(函数的定义)
a(函数)-->b2(编写自定义函数)
a(函数)-->b3(函数的调用)
a(函数)-->b4(常用的标准函数)
b1-->c1(函数及其意义)
b1-->c2(关键字def)
b1-->c3(函数的命名规则)
b2-->d1(无参函数与有参函数)
b2-->d2(返回值)
b3-->e1(简单的函数调用)
b3-->e2(递归函数及其调用)
b4-->f1(常见的标准函数)
b4-->f2(其他标准函数)
~~~



## 知识点清单

### 知识点1 函数的定义

1. 函数及其意义

   函数是一段能够实现特定功能，可重复使用的语句组。用函数名表示并通过函数名调用

   标准函数：python语言中已经构建好的函数，如print( ),input( ),str( )等

   自定函数：自己定义的函数，如下面自定义的nihao( )函数，代码被封装后可以通过函数名重复调用

   ~~~python
   def nihao():
       x = input("请输入姓名：")
       print("你好：",x)
   nihao()
   ~~~

2. 关键字def

   关键字def用来定义函数，定义函数遵循以下规则

   - 以def开头后接函数名及半角圆括号和冒号
   - 函数主体从下一行开始并且必须缩进

3. 函数的命名规则

   - 函数名应具备描述性，就是说函数名可以表现函数的功能
   - 函数名最好为小写，可用下划线增强阅读性，如function_name
   - 自定义函数名避免使用python关键字和标准函数名，如int，import

### 知识点2 编写自定义函数

1. 无参函数与有参函数

   - 无参函数draw_square()

   ~~~python
   import turtle as t
   def draw_square():
       for i in range(4):
           t.forward(100)
           t.left(90)
       t.done()
   draw_square()
   ~~~

   - 有参函数draw_polygon(x)

   ~~~python
   import turtle as t
   def draw_polygon(n):
       for i in range(n):
           t.forward(100)
           t.left(360/n)
       t.done()
   draw_polygon(8)
   ~~~

2. 形参与实参

   

3. 返回值

### 知识点3 函数的调用



### 知识点4 常见的标准函数



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题2 模块化编程

## 考查方向



## 知识点清单

### 知识点1 模块化编程



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题3 递归及算法

## 考查方向



## 知识点清单

### 知识点1 算法



### 知识点2 递归函数与递归算法



### 知识点3 常用的递归算法实例



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题4 文件

## 考查方向



## 知识点清单

### 知识点1 文件的打开和关闭



### 知识点2 文件的读写



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题5 模块

## 考查方向



## 知识点清单

### 知识点1 模块的概念及创建



### 知识点2 自定义模块的导入及使用



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题6 包

## 考查方向



## 知识点清单

### 知识点1 包的概念及创建方法



### 知识点2 包的导入及使用



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题7 类

## 考查方向



## 知识点清单

### 知识点1 类的定义和创建



### 知识点2 创建类的成员并访问的方法



### 知识点3 类的封装



### 知识点4 类的继承



### 知识点5 面向对象编程的概念及特点



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题8 命名空间及作用域

## 考查方向



## 知识点清单

### 知识点1 全局变量和局部变量



### 知识点2 命名空间和作用域



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题9 第三方库的获取及使用

## 考查方向



## 知识点清单

### 知识点1 第三方库的获取



### 知识点2 jieba库的使用



### 知识点3 pyinstaller库的使用



### 知识点2 wordcloud库的使用

## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习



# 专题10 基本的Python标准库

## 考查方向



## 知识点清单

### 知识点1 random库



### 知识点2 time库



### 知识点3 turtle库



### 知识点4 math库



## 知识点探秘



## 巩固练习



------

<center><font color=blue>...End!...</font></center>

------

## 复习




# 附录

## 附录一	真题演练及参考答案<a href="./pdf/py1_result.pdf"><font color="white">py1_result</font></a>

真题演练： <a href="./pdf/py2_test.pdf"><font color="red">py2_test</font></a>

参考答案： 详见附录一标题

