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

2. 形参与实参，多个参数

   观察下面的例子：

   ~~~python
   def add(x,y):
       sum = x+y
       print(sum)
   m,n = 2,6
   add(m,n)
   ~~~

   - 定义函数时圆括号中的参数x，y被称为形参
   - 调用函数时圆括号中的传递参数m，n称为实参
   - 函数的多个参数定义和调用用半角逗号分隔

3. 返回值

   - 返回值是指执行函数后返回的数据，用关键字return来对数据处理结果进行返回。

   ~~~python
   def add(x,y):
       sum = x+y
       return sum
   m,n = 2,6
   result=add(m,n)
   print(result)
   ~~~

   - 返回值一般只有一个，如果需要返回多个数据，可以将数据保存在列表里

     例如，定义一个函数even_list(),它接收一个整型参数n，返回0~n内的所有偶数（包括0）组成的列表

   ~~~python
   def even_list(n):
       l = []
       for i in range(0,n,2):
           l.append(i)
       return l
   test_lis = even_list(11)
   print(test_lis)
   ~~~

   - 函数如果设置多个返回值，默认以元组数据类型的方式返回

   ~~~python
   def test(n):
       x = n*2
       y = n*3
       return n,x,y
   result = test(10)
   print(result)
   ~~~

   - 函数如果没有设置返回值，python默认它的返回值为None（这是一种特殊的数据类型，而且值唯一）

   ~~~python
   def test(n):
       x = n*2
       y = n*3
       return 
   result = test(10)
   print(result)
   #或者
   def test(n):
       x = n*2
       y = n*3
   result = test(10)
   print(result)
   ~~~

### 知识点3 函数的调用

1. 使用函数名调用函数

2. 无论是标准函数还是自定义函数，调用前都不会被执行

3. 函数的调用要在函数创建之后，以下示例会发生异常：函数名找不到

   ~~~python
   test1()
   def test1():
       print('hehe')
   ~~~

4. 在一个函数的内部可以调用其他函数

   ~~~python
   def test1():
       print('hehe')
   def test2():
       test1()
       print('hahi')
   test2()
   ~~~

5. 在一个函数内部调用它自己本身，那么这个函数称为递归函数

   例如：
   
   ~~~python
   def test(n):
       if n==1:
           return print('hehe')
       else:
           print('hahi')
           return test(n-1)
   test(5)
   ~~~
   
   又例如:计算n的阶乘 1 x 2 x 3 x ... x (n-1) x n,记为n！
   
   ~~~python
   def f(n):
       if n == 1:
           return 1
       else:
           return f(n-1)*n
   print(f(4))
   ~~~
   
   运行过程如下：
   
   ![recursion](.\img\recursion.PNG)

### 知识点4 常见的标准函数

python中共有69个标准函数，可上网查看相关文档，例举几个，如下：

1. abs(x) 返回数字的绝对值,参数x为int或float类型

   ~~~python
   a = abs(-9.7)
   print(a)
   ~~~

2. type(x) 返回参数的数据类型,参数x为经python认可的数据类型

   - 以下为常用的数据类型

   |     返回值      | 数据类型 |
   | :-------------: | :------: |
   |  <class 'int'>  |   整型   |
   |  <class 'str'>  |  字符串  |
   | <class 'list'>  |   列表   |
   | <class 'float'> |  浮点型  |
   | <class 'bool'>  |  布尔型  |
   | <class 'dict'>  |   字典   |
   | <class 'tuple'> |   元组   |

   ~~~python
   a = 100
   b = 'sdfg'
   c = [1,2,3]
   d = 1.333
   e = False
   f = {'a':1,'b':2,'c':3}
   g = (1,2,3)
   h = {1,2,3}
   print(type(a),type(b),type(c),type(d),type(e),type(f),type(g))
   ~~~

   - 判断一个数据的类型可以有以下三种方法：

   ~~~python
   a = 100
   if type(a) == int:
       print(1)
   if type(a) is int:
       print(2)
   if isinstance(a, int):
       print(3)

3. ord(x) 和 chr(x)

   ​		计算机中所有的数据本质上皆为由0和1组成的二进制数。所以无论什么字符，都必须转换成使用0和1能够表示的数字类型。将字符转变成数字的过程叫做**编码**；相反的过程叫做**解码**。

   例如，用Unicode编码方式对汉字“国”进行编码和解码。

   ![en_decode](.\img\en_decode.PNG)

   Unicode是一种国际上通用的编码方案。函数ord( )是将一个字符串作为参数，返回该字符串对应的Unicode值，而函数chr( )则将Unicode值转变为对应字符。

   ~~~python
   x = '国'
   b=ord(x)
   print(b)
   
   y = 43
   a = chr(y)
   print(a)
   ~~~

   **备注：**ord( )函数只接收一个字符，例如一个汉字，一个字母或者一个符号

4. sorted(x)

   sorted( )函数用于排序，并返回一个列表。参数x表示一个可排序序列

   默认按照升序排列，设置reverse参数为Ture时，则按降序排列

   ~~~python
   a = "853492"
   b = [9,3,5,8,2]
   print(sorted(a))
   print(sorted(b))
   print(sorted(b,reverse = True))
   ~~~

## 知识点探秘

<font color=blue>----></font>下列代码，正确的是（）

A.

~~~python
class py_test(x):
    y=x**2
    return y
~~~

B.

~~~PYTHON
def py_test(x):
y=x**2
return y
~~~

C.

~~~PYTHON
def py_test(x)
	y=x**2
	return y
~~~

D.

~~~PYTHON
def py_test(x):
	y=x**2
	return y
~~~

答案：<font color='white'>B</font>

<font color=blue>----></font>下列代码，正确的是（）

A.

~~~python
def def(x):
    x = 2
~~~

B.

~~~PYTHON
def hi(x):
    x = 2
~~~

C.

~~~PYTHON
def hi(x):
x = 2
~~~

D.

~~~PYTHON
def hi(x)
	x = 2
~~~

答案：<font color='white'>B</font>

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
a = -34
b = -2
print(abs(a)<b)
~~~

A. -34<-2	B. 34<2	C. True	D. False

答案：<font color='white'>D</font>

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
n = 0
for i in range(-10,0,2):
    n+=abs(i)
print(n)
~~~

A. -30	B. 30	C. -70	D. 70

答案：<font color='white'>D</font>

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
a = 0
def fc(x,y):
    a = x+y
    return a
c = fc(['a','b','c'],[1,2,3])
print(c)
~~~

A. None	B. ['a','bb','ccc']	C. ['a','b','c',1,2,3]	D. ['a',1,'b',2,'c',3]

答案：<font color='white'>C</font>

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
m,n = 10,5
def copy(m,n):
    return m*n
result = copy([1,2,3],2)
print(result)
~~~

A. [1,2,3]	B. [2,4,6]	C. [1,2,3,1,2,3]	D. 50

答案：<font color='white'>C</font>

## 巩固练习

<font color=blue>1.</font>运行下列代码，输出结果是（）

~~~python
def summation(m,n):
    x = m**2
    y = x/2
    return x,y
result = summation(8,2)
print(result)
~~~

A. (64,32)	B. (64,32.0)	C. 8 8	D. 程序报错

答案：<font color='white'>B</font>

<font color=blue>2.</font>运行下列代码，输出结果是（）

~~~python
a = 3.0 >5.0
b = type('1') == type(1)
print(a and b)
~~~

A. True	B. False	C. None	D. 程序报错

答案：<font color='white'>B</font>

<font color=blue>3.</font>按要求写代码

- 定义一个函数，函数名自拟，接收一个参数，正三角形的边长为传递给函数的参数

- 定义函数后，调用该函数绘制一个红色的且边长为100的正三角形

  答案：见下面隐藏代码块

  <div style="color:white";>
  import turtle as t
  def tri(n):
      t.pencolor('red')
      for i in range(3):
      	t.forward(n)
      	t.left(120)
      t.done()
  tri(100)
  </div>

------

<center><font color=blue>...End!...</font></center>

------

## 复习

1. 按要求编写代码：

   自定义一个函数使两个等长列表的元素能够相加，并把计算结果保存在新列表中

   例如，输入列表[1,2,3]与列表[4,5,6]，输出[5,7,9];

   ​			输入列表['a','b','c']与列表['x','y','z'],输出['ax','by','cz']

   答案：见下面隐藏代码块

   <div style="color:white";>
   def lis_ele_add(lis1,lis2):
       result_list = []
       for i in range(0,len(lis1)):
           result_list.append(lis1[i]+lis2[i])
       return result_list
   print(lis_ele_add([1,2,3],[4,5,6]))
   print(lis_ele_add(['a','b','c'],['x','y','z']))
   </div>
   
   
2. 学习pygame库的基本使用（pygame学习传送门： <a href="../../code/pygame/pygame_cookbook.html"><font color="red">传送</font></a>），并自定义两个函数，一个用于在游戏窗口绘制网格，一个用于在游戏窗口显示得分，如图所示：

   （已知窗口大小800x500，网格间距20，网格线条RGB颜色(150,150,150) ,字体样式为楷体simkai.ttf<a href="./font/simkai.ttf"><font color="blue">【下载】</font></a>)
   
   ![pygame0](.\img\pygame0.png)
   
   答案：见下面隐藏代码块
   
   <div style="color:white";>
   import pygame, sys
   def drawGameGrid(screen):
       for x in range(20, 800, 20):
           pygame.draw.line(screen, (150,150,150), (x, 0), (x, 500))
       for y in range(20, 500, 20):
           pygame.draw.line(screen, (150,150,150), (0, y), (800, y))
   def showScore(screen,score):
       font = pygame.font.Font('simkai.ttf',30)
       text = font.render('Score: %d'%score, True, (255,255,255))
       rect = text.get_rect()
       screen.blit(text, rect)
   pygame.init()
   screen = pygame.display.set_mode((800,500))
   pygame.display.set_caption("画网格")
   while True:
       for event in pygame.event.get():
           if event.type == pygame.QUIT:
               sys.exit()
       drawGameGrid(screen)
       showScore(screen,0)
       pygame.display.update()
   </div>

# 专题2 模块化编程

## 考查方向

~~~mermaid
graph LR
a(模块化编程)-->b(模块化编程思想)
a-->c(自顶向下的设计方法)
a-->d(分析和解决实际问题)
~~~



## 知识点清单

### 知识点1 模块化编程

1. 模块化编程思想

   将一个程序问题分割成若干个部分来解决，每一部分就可以称作一个模块。

   例如制作一个简易聊天工具，可以简单分解成发送信息模块，接收信息模块，图形界面模块

   模块化编程的优点：

   - 层次结构清晰，降低复杂度
   - 提高代码复用率，独立创建的模块可以重复使用
   - 易于扩展和维护

2. 自顶向下的设计方法

   ​		自顶向下就是从整体规划系统的功能和性能，然后进行划分，分解成规模更小功能更简单的局部模块，并确立这些模块间的相互关系

   例如，学校校长要求每位同学明天穿黑色的裤子，他可能会怎么做呢？他可能会像下面这样做！

   :one:校长开会通知所有的班主任

   :two:班主任在微信群里通知所有家长

   :three:家长告知自己的子女

   ~~~mermaid
   graph TD
   a(校长)-->b1(班主任1)
   a-->b2(班主任2)
   b1-->c1(家长A)
   b1-->c2(家长B)
   b2-->c3(家长C)
   b2-->c4(家长D)
   c1(家长A)-->d1(学生A)
   c2(家长B)-->d2(学生B)
   c3(家长C)-->d3(学生C)
   c4(家长D)-->d4(学生D)
   ~~~

   像这种自顶向下逐层分解的方法应用到程序设计中，我们就叫自顶向下的设计方法

3. 分析和解决实际问题

   - 实际问题解决

     利用模块化编程的思想和方法，可以帮助我们更好的解决实际问题。例如，小明要给学校足球赛参赛的10支队伍安排比赛出场次序，要求球队随机组合且不能重复，你会怎么做呢？

     我们可以这样：

     - 给每只队伍编号（创建列表）
     - 随机抽取，且不重复
       1. 随机抽取一个编号，写入新的空列表，在原列表中去除
       2. 剩下的队伍继续抽取，直到原列表清空
     - 安排组队（将新列表按次序两两组合输出）

     ~~~python
     #给每只队伍编号（创建列表）
     team_list = ['a','b','c','d','e','f','g','h','i','j']
     ~~~

     ~~~python
     #随机抽取，且不重复
     import random
     new_list = []
     #1.随机抽取一个编号，写入新的空列表，在原列表中去除
     element = random.choice(team_list) 
     new_list.append(element)
     team_list.remove(element)
     ~~~

     ~~~python
     #2.剩下的队伍继续抽取，直到原列表清空
     while team_list:
         element = random.choice(team_list) 
         new_list.append(element)
         team_list.remove(element)
     ~~~

     ~~~python
     #安排组队
     for i in range(0,10,2):
         print(new_list[i],new_list[i+1]) 
     ~~~

     <font color = 'blue'>:smile:</font>整合形成最终程序

     ~~~python
     import random
     team_list = ['a','b','c','d','e','f','g','h','i','j']
     new_list = []
     while team_list:
         element = random.choice(team_list) 
         new_list.append(element)
         team_list.remove(element)
     for i in range(0,10,2):
         print(new_list[i],new_list[i+1])
     ~~~

   - 模块化编程的设计原则

     模块化编程设计遵循的原则：模块内高内聚，模块间低耦合

     高内聚：划分模块时把联系紧密的功能放在一起，一个模块只做一件事

     低耦合：模块间独立性高，相互影响小

     一般内聚度越高，耦合度越低。往往使用函数和类能够更好的体现高内聚低耦合的设计原则。

     我们将上面的代码做成函数模块：

     ~~~python
     import random
     def chou_qian(team_list, new_list):
         while team_list:
             element = random.choice(team_list) 
             new_list.append(element)
             team_list.remove(element)
             
     def zu_dui(new_list):
         for i in range(0,10,2):
         	print(new_list[i],new_list[i+1])
      
     team_list = ['a','b','c','d','e','f','g','h','i','j']
     new_list = []
     chou_qian(team_list, new_list)
     zu_dui(new_list)
     ~~~


## 知识点探秘

<font color=blue>----></font>下列说法中错误的是（多选）（）

~~~python
A. 模块化设计一般有紧耦合和松耦合两个基本原则
B. 函数可以作为一种代码封装被其它程序调用
C. 文件只有文本文件
D. 当类的名称有多个单词时，可以使用“驼峰式命名法”命名
~~~

答案：<font color='white'>AC</font>

<font color=blue>----></font>下列说法中正确的是（）

~~~python
A. 模块化编程是指将程序随意分为几个程序文件
B. 自顶向下是一种程序设计方法，用自顶向下方法设计出的程序必须只使用一个程序文件
C. 模块化编程让程序结构变得清晰，有利于编写复杂的程序，便于优化程序
D. 自顶向下的程序设计方法不利于优化程序
~~~

答案：<font color='white'>C</font>

## 巩固练习

<font color=blue>1.</font>按要求写程序

- 分两次输入，每次输入一个十进制整数，假设输入的两个整数为x,y

- 程序随机生成一个介于x,y之间（包含x,y） 的十进制整数；

- 程序输出这个十进制整数及对应的二进制数（bin()函数可以将一个十进制数转成二进制）

  输入样例1：

  ~~~python
  3
  6
  ~~~

  输出样例1：

  ~~~pythn
  4 0b100
  ~~~

  输入样例2：

  ~~~python
  3
  1
  ~~~

  输出样例1：

  ~~~pythn
  2 0b10
  ~~~

  答案：见下面隐藏代码块

  <div style="color:white";>
  import random
  x = int(input("请输入一个整数"))
  y = int(input("再输入一个整数"))
  if x>y:
      x,y = y,x
  a = random.randint(x,y)
  print(a,bin(a))
  </div>

  <font color=blue>2.</font>利用turtle库绘制一个布满星星的背景墙，10颗星星随机排布。绘制这个画面，你会把问题分几步呢？

  请按照提示分步解决问题，连续画10个随机位置的星星，颜色可自定义。

  ​	(1) 绘制一颗星星

  ​	(2) 随机生成绘制星星的起始位置

  ​	(3) 修改坐标绘制其它星星

  已知图形绘制步骤和部分模块，请编写主程序，绘制出完整画面。

  ~~~python
  def ballon(c):
      #参数c表示颜色字符串
      t.pencolor(c)
      for i in range(5):
          t.forward(50)
          t.left(144)
  
  
  #安排布局
  def change_location():
      x = random.randint(-300,300)
      y = random.randint(-200,200)
      return [x,y]  #返回坐标列表
  ~~~

  答案：见下面隐藏代码块

  <div style="color:white";>
  import turtle as t
  import random
  for i in range(10):
      cor = change_location() 
      t.penup()
      t.goto(cor[0],cor[1])
      t.pendown()
      ballon('green')
  t.done()
  </div>


------

<center><font color=blue>...End!...</font></center>

------

## 复习

1. 利用模块化的编程思想方法制作简易聊天工具

   - 发送信息模块
   - 接收信息模块
     - 子块：获取本机ip地址
   - 聊天界面模块
   - 主程序运行模块

   ~~~python
   import PySimpleGUI as sg 
   import socket
   import threading
   
   #获取本机IP地址
   def local_addr():
       computer_name = socket.gethostname()
       local_addr = socket.gethostbyname(computer_name)
       return local_addr
   
   #发送信息模块
   def send(msg,sever_ip):
       client = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
       ip_port = (sever_ip, 9999)
       client.sendto(msg.encode('utf-8'),ip_port)
       client.close()
       
   #接收信息模块
   def receive():
   	local_ip =  local_addr()  
       BUFSIZE = 1024
       ip_port = (local_ip, 9999)
       server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM) 
       server.bind(ip_port)
       while True:
           data,client_addr = server.recvfrom(BUFSIZE)
           print('server收到的数据', data.decode('utf-8'))
       server.close()
   
   #聊天界面模块
   def gui():
       layout=[[sg.Text('接受的信息'),sg.Output(key='out')],
               [sg.Text('发送的信息'),sg.In(key='in')],
               [sg.Text('服务器地址'),sg.In(key='ip')],
               [sg.B('发送',key='send')]]
       window = sg.Window('chat',layout)
       while True:
           event,values=window.read()
           if event is sg.WIN_CLOSED:
               break   
           if event=='send':
               if values['ip']:
                   if values['in']:
                       send(values['in'],values['ip'])
       window.close() 
   
   #主程序运行模块
   t1=threading.Thread(target=receive,)
   t2=threading.Thread(target=gui,)
   t1.start()
   t2.start()
   ~~~


# 专题3 递归及算法

## 考查方向

~~~mermaid
graph LR
A(递归及算法)-->B(算法)
A(递归及算法)-->C(递归函数与递归算法)
A(递归及算法)-->D(常用的递归算法实例)
B-->X1(算法的概念)
B-->X2(算法的特征)
C-->Y1(递归函数)
C-->Y2(递归算法)
D-->Z1(汉诺塔)
D-->Z2(斐波那契数列)
D-->Z3(排列组合)
~~~

## 知识点清单

### 知识点1 算法

1. 算法的概念

   算法是计算或者解决特定问题的步骤。这里所说的特定问题多种多样，如”将随意排列的数字按从小到大的顺序排序“，“从海量数据中查找符合要求的数据”等

2. 算法的特征

   一个合格的算法具有以下五大特征

   - 有限性：算法必须在有限步骤内解决问题
   - 明确性：算法中对每一步的描述必须是严谨、无歧义的
   - 输入：一个算法有0个或者多个输入，0个输入通常是指算法本身给出了初始条件
   - 输出：算法应具备一个或多个输出
   - 有效性：也称可行性，任何算法中的计算步骤都可以被分解成基本的可执行的操作步骤，也就是这些操作都可以通过已经实现的基本运算来实现。

### 知识点2 递归函数与递归算法

1. 递归函数

   - 如果一个函数在内部调用它本身，这个函数就是递归函数。

   - 递归函数通常会利用分支结构，包含两部分：递归条件和基线条件

   - 递归条件是指什么情况下函数会调用本身，而基线条件是指出了递归的终止条件，不再进行递归。

     以阶乘函数为例，n为自然数，基线条件为n=1，此时不再递归；递归条件则为n>1。

     ~~~python
     def factorial(n):
         if n==1:   #基线条件
             return 1
         else:   #递归条件
             return factorial(n-1)*n  #调用自身
     ~~~

     递归函数定义简单，逻辑清晰，常用于解决多种数学问题。

2. 递归算法

   递归算法是一种通过将大问题分解为小规模的同类子问题进而解决问题的方法。

   他的核心思想是“分而治之”，把一个复杂问题分成两个或多个相同或相似的问题，直到最后子问题可以简单解决，原问题的解就是子问题的合并。

   例如，求解n的阶乘f(n),可以将它分解为求解nxf(n-1。.

   ​			f(n-1)再分解成(n-1)xf(n-2)……以此类推。

   ​			根据函数定义，1的阶乘为1，最小的子问题被解决，原问题f(n)即为这些子问题的合并

### 知识点3 常用的递归算法实例

1. **汉诺塔**

   <font color="green">汉诺塔是根据印度传说形成的数学问题。如图，有A,B,C三根柱子，A柱子上有n个圆盘，圆盘从下往上依次变小。要求按照下列规则姜所有圆盘移动到C柱子上。最终圆盘在C柱子上也按照从下往上依次变小排列。问如何移动，移动多少次才能完成?</font>

   移动规则：

   - 每次只移动一个圆盘
   - 移动时,大圆盘不能叠放在小圆盘上；
   - 移动中，可将圆盘临时置于B柱子上，也可将从A柱子上移出的圆盘重新移回A柱子

   <img src=".\img\hannuota.png" alt="hannuota" style="zoom:48%;" />

   **分析**：如果n=1，只有一层，将A------>C

   ​			如果n=2，只有两层，将A------>B,A------->C,B--------->C

   ​			如果n=3，只有三层，将A------>C,A------>B,C--------->B,A------>C,B------>A,B------->C,A------>C

   我们仔细研究会发现，当n=3时，如果将上两层看做一个整体，那么就相当于n=2时的移动方法。即

   n=3时，A------>C,A------>B,C--------->B相当于n=2时，A------>B,

   n=3时，A------>C相当于n=2时 , A------->C

   n=3时，B------>A,B------->C,A------>C相当于n=2时，B--------->C

   <div style="background-color:#409EFF"><font color="white">所以当移动n层时，我们可以看做是上面的n-1层为一个整体，分成2层，然后移动完成。而当n-1层移动时又可以将n-2层看做一个整体，分成2层，然后移动完成。依次类推！</font></div>

   而两层的移动方法我们已经知道，上面的分析恰恰符合递归的算法，所以我们编写程序如下：

   ~~~python
   #设n为圆盘个数，a为起始位置，b为过渡位置，c为目标位置
   def hannuota(n,a,b,c):
       if n ==1:
           print(a,"------>",c)  #基线条件：只有一层
       else:
           hannuota(n-1,a,c,b)   #将除了底层外的n-1层，从a移动到b
           print(a,"------>",c)  #将底层移动到c
           hannuota(n-1,b,a,c)	  #将n-1层从b移动到c
   
   hannuota(2,'A','B','C')
   ~~~

2. **斐波那契数列**

   斐波那契数列又称“”黄金分割数列。数列从0和1开始，后面每一项等于前两项的和。

   数列的前n项为：0,1,1,2,3,5,8,13,21，……n。

   即数学表达为：F~0~ = 0，F~1~ = 1，F~2~ =F~0~+F~1~，……F~n~ =F~n-1~+F~n-2~

   <font color="green">例如，有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对，假设每对小兔子都不死，求第10个月有多少对兔子？</font>

   **分析**：

   | 第一个月 | 第二个月 | 第三个月 | 第四个月 | 第五个月 | 第六个月 |
   | -------- | -------- | -------- | -------- | -------- | -------- |
   | 1对兔子  | 1对兔子  | 2对兔子  | 3对兔子  | 5对兔子  | 8对兔子  |

   仔细研究会发现，兔子生宝宝的列子完全符合斐波那契数列，而斐波那契数列又可以用递归的算法实现，所以我们编写程序如下：

   ~~~python
   #设n为第几个月
   def fibnacci(n):
       if n==0 or n ==1:
           return n
       else:
           return fibnacci(n-1)+fibnacci(n-2)
   num = fibnacci(10)
   print(num)
   ~~~

3. 排列组合

   将n个不同元素，按照一定的顺序排列，所有的排列情况叫做全排列。
   
   例如，将1,2进行全排列，结果是什么呢？
   
   ~~~python
   #全排列结果如下，一共有2种排列情况
   1,2
   2,1
   ~~~
   
   例如，将1,2,3进行全排列，结果是什么呢？
   
   ~~~python
   #全排列结果如下，一共有6种排列情况
   1,2,3
   1,3,2
   2,1,3
   2,3,1
   3,2,1
   3,1,2
   ~~~
   
   **分析：**
   
   当一个数排列时，全排列即为自排列
   
   当两个数排列时，全排列是首位固定，内容轮换，剩下的1个元素为自排列
   
   当三个数排列时，全排列是首位固定，内容轮换（1-->2-->3），剩下的2个元素按照两排列方法进行排列
   
   那么四个数排列呢？
   
   当四个数排列时，全排列是首位固定，内容轮换，剩下的3个元素按照三排列方法进行排列
   
   ……
   
   依次类推，n个数排列
   
   <div style="background-color:#409EFF"><font color="white">当n个数排列时，全排列是首位固定，内容轮换，剩下的n-1个元素按照n-1排列方法进行排列</font></div>
   
   
   
   <font color='green'>经过以上分析我们发现，</font>
   
   <font color='green'>排n个数，需先排n-1个数</font>
   <font color='green'>排n-1个数，需先排n-2个数</font>
   <font color='green'>……</font>
   
   <font color='green'>排3个数，需先排2个数</font>
   
   <font color='green'>排2个数，需先排1个数</font>
   
   <font color='green'>排1个数为基线条件</font>
   
   <font color='green'>利用递归算法，可以解决全排列问题。</font>
   
   
   
   ~~~python
   #设参数lis为待排序列
   #设参数start表示待排序列的起始索引位置
   #设参数end表示待排序列的结束索引位置
   
   def quanpai(lis,start,end):
       if start==end: #基线条件：起始位置和结束位置重合，表示只剩一个元素，排序完成
           print(lis)
       else:
           for i in range(start,end+1):
               lis[start],lis[i]=lis[i],lis[start] #首位固定，内容轮换(将第i个元素与首个元素互换位置) 
               quanpai(lis,start+1,end) #不包含首位的子序列进行全排
               lis[start],lis[i]=lis[i],lis[start] #恢复元素交换前的状态(将第i个元素与首个元素位置换回来，为下次交换做准备)
   num=[1,2,3]
   quanpai(num,0,len(num)-1)
   ~~~

## 知识点探秘

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
def hello(n):
    if n==0:
        return 1
    elif n==1:
        return 2
    else:
        return (hello(n-1)+hello(n-2))
print(hello(3))
~~~

A. 3	B. 5	C. 8	D. 13

答案：<font color='white'>B</font>

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
def multi(x):
    if x<=1:
        return 1
    else:
        return multi(x-1)*multi(x-2)*3
print(multi(4))
~~~

A. 18	B. 27	C. 81	D. 243

答案：<font color='white'>C</font>

<font color=blue>----></font>运行下列代码，输出结果是（）

~~~python
def subtract(x,y):
    if x<0:
        return 0
    else:
        return subtract(x-y,y)+x
print(subtract(8,2))
~~~

A. 12	B. 18	C. 20	D. 40

答案：<font color='white'>C</font>

## 巩固练习

<font color=blue>1.</font>按要求写程序

​	利用递归方法计算8的阶乘

​	答案：见下面隐藏代码块

<div style="color:white";>
def f(n):
    if n==1: 
        return 1
    else:  
        return f(n-1)*n  
print(f(8))
</div>

<font color=blue>2.</font>按要求写程序

​	利用递归方法输出斐波那契数列各项

输入样例：

~~~python
输入一个正整数：5
~~~

输出样例：

~~~python
0
1
1
2
3
5
~~~

答案：见下面隐藏代码块

<div style="color:white";>
def f(n):
    if n<=1: 
        return n
    else:  
        return f(n-1)+f(n-2)  
n=int(input("输入一个正整数："))
for i in range(n+1):
    print(f(i))
</div>

<font color=blue>3.</font>按要求写程序

​	对列表['香蕉','苹果','梨子']的元素进行全排列

​	答案：见下面隐藏代码块

<div style="color:white";>
def f(lis,start,end):
    if start==end: 
        print(lis)
    else:  
        for i in range(start,end+1):
            lis[start],lis[i] = lis[i],lis[start]
            f(lis,start+1,end)
            lis[start],lis[i] = lis[i],lis[start]
lis = ['香蕉','苹果','梨子']
f(lis, 0, len(lis)-1)
</div>

------

<center><font color=blue>...End!...</font></center>

------

## 复习

1. 利用turtle库采用递归方法绘制一棵树

   答案：见下面隐藏代码块
   
   <div style="color:white";>
   import turtle as t
   t.setup(800,600)  
   t.pencolor('brown')
   t.setheading(90)
   t.penup()
   t.goto(0,-280)
   t.pendown()
   def draw(brench):
       if brench<=0:
          pass        
       else:
           t.forward(brench)
           t.right(20)
           draw(brench-20)
           t.left(40)
           draw(brench-20)
           t.right(20)
           t.backward(brench)
   draw(100)
   t.done()
   </div>

# 专题4 文件

## 考查方向

~~~mermaid
graph LR
a(文件)-->b(文件的打开和关闭)
a-->c(文件的读写)
b-->d1(文件及文件操作)
b-->d2(打开和关闭文件)
b-->d3(文件打开模式)
c-->e1(读取文件)
c-->e2(写入文件)
c-->e3(其他操作)
~~~



## 知识点清单

### 知识点1 文件的打开和关闭

1. 文件及文件操作
   - 文件在本质上是一个数据序列，可以包含任何数据内容
   - 文件有两种类型：文本文件和二进制文件
   - 文本文件可以看做存储在计算机中的长字符串
   - 二进制文件是非字符的、格式特定的文件，如图片文件，音频文件等
   - python对文件的操作步骤：打开---->操作----->关闭 ；操作又分为：读取数据和写入数据
   
2. 打开和关闭文件

   - 打开文件

     ~~~python
     变量名 = open('文件名'，'打开方式'，'其他参数，如编码等')
     ~~~

     - 打开方式可以省略，默认以<font color='blue'>‘只读方式’</font>打开文件
- 编码方式可以省略

   - 当文件被打开时，文件处于被占用状态，除了本程序其它程序不能操作该文件
   - 当文件被关闭时，另一个程序才可以操作该文件

   - 关闭文件

     ~~~python
     变量名.close()
     ~~~

   示例如下，读取txt文件内容：

   ~~~python
   f = open('1.txt') #打开文件
   for i in f:		  #逐行读取文件
       print(i)
   f.close()		  #关闭文件
   ~~~

   <font style="background-color:#409EFF;color:white">自己试着写一下，读取3行程序怎么编呢？</font>

3. 文件打开模式

   文件打开模式用于控制如何打开文件，打开模式如下：

   | 打开模式 |                           含    义                           |
   | :------: | :----------------------------------------------------------: |
   |    r     |         只读模式（默认值），若文件不存在，则程序报错         |
   |    w     | 覆盖写模式，若文件不存在则创建新文件，若存在则完全覆盖原内容 |
   |    x     |    创建写模式，若文件不存在则创建新文件，若存在则程序报错    |
   |    a     | 追加写模式，若文件不存在则创建新文件，若存在则在最后追加内容 |
   |    +     |     与r、w、x、a一同使用，在原功能基础上增加同时读写功能     |

   示例：
   
   ~~~python
   f = open('1.txt','w')
   f.write('你好')
   f.write('\n')
   f.write('中国')
   f.close()
   ~~~
   
   <font style="background-color:#20B2AA;color:white">*注意：文件名的书写，如果要打开的文件和程序文件在同级目录（在同一文件夹下）可以不用书写文件路径；反之则需要书写文件路径</font>
   
   示例：
   
   ~~~python
   f = open('C:\\Users\\Lenovo\\Desktop\\1.txt','r')
   print(f.read())
   f.close()
   ~~~
   
   

### 知识点2 文件的读写

1. 读取文件

   | 方法           | 作用                                                         |
   | -------------- | ------------------------------------------------------------ |
   | f.read(x)      | 以字符串形式返回读取的数据，传参表示读取的字符个数，不传参则读取所有内容 |
   | f.readline(x)  | 读取一行，以字符串的形式返回数据。若传参表示读取该行的字符数 |
   | f.readlines(x) | 读取所有行，以列表形式返回数据，列表中的每一个元素就是文件中的每一行。若传参表示读取的字节数并返回最后一个字节所在的行 |

   ~~~python
   #读取文件的第二行
   f = open('1.txt','r')
   content = f.readlines()
   print(content[2])
   f.close()
   ~~~

2. 写入文件

   |      方法       |                        作用                         |
   | :-------------: | :-------------------------------------------------: |
   |   f.write(x)    |                  将字符串x写入文件                  |
   | f.writelines(x) | 将字符串为元素组成的序列（列表或元组）x依次写入文件 |

   ~~~python
   f=open('1.txt','w')
   f.writelines(['白日依山尽\n','黄河入海流\n'])
   f.close()
   ~~~

3. 其它操作

   文件指针：用于标定文件位置编号的变量。

   可以想象成游标卡尺的游标，而文件编号就相当于卡尺。

   |   方法    |                             作用                             |
   | :-------: | :----------------------------------------------------------: |
   | f.seek(x) | 移动文件读取指针到指定位置，参数代表从文件起始位置移到目标位置的偏移量（即距离文件起始位置移动几个字节）；移动成功返回新的位置编号，失败返回-1。 |

   示例：

   ~~~python
   #在1.txt文件中写入一段英文字母 Today is my birthday！
   f=open('1.txt')
   f.seek(1)
   print(f.read(1))
   f.close()
   ~~~

   #运行以下一段程序，猜猜会发生什么

   ~~~python
   #在1.txt文件中写入一段中文 今天是我的生日！
   
   f=open('1.txt')
   f.seek(1)
   print(f.read(1))
   f.close()
   ~~~

   

   <font style="background-color:#409EFF;color:white">特别注意：不同编码规则里，字母和汉字占用的字节是不同的。所以参数x必须是该字符所占用字节的整数倍。</font>

   1，ASCII码：一个英文字母（不分大小写）占一个字节的空间，一个中文汉字占两个字节的空间。

   ~~~python
   #修改以上代码
   f=open('1.txt')
   f.seek(2)
   print(f.read(1))
   f.close()
   ~~~

   2，UTF-8编码：一个英文字符等于一个字节，一个中文（含繁体）等于三个字节。中文标点占三个字节，英文标点占一个字节

   3，Unicode编码：一个英文等于两个字节，一个中文（含繁体）等于两个字节。中文标点占两个字节，英文标点占两个字节

## 知识点探秘

<font color=blue>----></font>下列程序要将列表元素写入txt文件，___处应该填写的是（）

~~~python
print('\n"姓名：","科目","成绩"')
file = open("message.txt",'w')
ls = ["小明","数学","100分"]
file.___(ls)
print("\n 录入一个学生成绩信息")
file.close()
~~~

A. writelines	B. readlines	C. read	D. write

答案：<font color='white'>A</font>

<font color=blue>----></font>在空白文件test.txt中添加内容，___处应该填写的是（）

~~~python
fo = open('test.txt',"___")
lst = ["唐僧"，"孙悟空","猪悟能","沙悟净"]
fo.writelines(lst)
fo.close()
~~~

A. r	B. w	C. x	D. t

答案：<font color='white'>B</font>

## 巩固练习

<font color=blue>1. </font>下列表述正确的是（）

​	A. 函数open() 只能打开文本文件

​	B. 文件读取指针只能从文件开始位置依次读取数据

​	C. 假定保存打开文件的变量名为f，f.read()可以读取文件一行内容

​	D. 以上说法皆不正确

​	答案：<font color='white'>D</font>

<font color=blue>2. </font>现要将文本文件message.txt中的信息逐行打印，则在___处应填写的是（）

~~~python
f = open('message.txt','___')
ls = f.___()
for i in ls:
    print(i)
f.close()
~~~

​	A. w read	B. r readline	C. r readlines	D. w readlines

​	答案：<font color='white'>C</font>

------

<center><font color=blue>...End!...</font></center>

------

## 复习

1.按要求写程序

编写python程序，在电脑桌面创建如图所示的1.txt文件，并读取该文件，计算其中‘like’单词的个数

![file_read](.\img\file_read.PNG)

答案：见下面隐藏代码块

<div style="color:white";>
count = 0
f = open('1.txt','w+') #w+先覆盖写，指针停留在最后
content = 'I like dogs and he likes cats.\nThey like mice.'
f.write(content)
f.seek(0)   #将指针从最后移到最前开始读取
for line in f.readlines():
    lis = line.split()
    print(lis)
    count += lis.count('like')
f.close()
print(count)
</div>

# 专题5 模块

## 考查方向

~~~mermaid
graph LR
A(模块)-->B1(模块的概念)
A-->B2(模块的创建)
A-->B3(模块的导入及使用)	
B3-->D1(导入模块及使用)
B3-->D2("函数dir()")
A-->B4(模块导入的级别)
B4-->F1(导入同级目录模块)
B4-->F2(导入下级目录模块)
B4-->F3(导入上级目录模块)
~~~



## 知识点清单

### 知识点1 模块的概念

1. 模块的概念和作用

- 随着程序的复杂性增加，定义的函数越来越多，我们可以将函数分组，分别放到不同的模块里；

  自定义模块的作用：（1）规范代码，易于阅读；（2）无需编写重复功能代码，提高效率

<img src=".\img\module.png" alt="module" style="zoom:48%;" />

- 在python中，定义一个.py文件就是一个模块。模块包含了定义的函数和变量；
- 自定义模块有两个过程：创建模块和导入模块

### 知识点2 模块的创建

1. 创建模块

   以下面例子为例，说明创建方法

   - 首先创建两个函数，一个加法函数jia()，一个减法函数jian()

   ~~~python
   def jia(x,y):
       return x+y
   
   def jian(x,y):
       return x-y
   ~~~

   - 然后保存这个函数文件，命名为test.py

   好了，模块test创建完毕！是不是超级简单！那么怎么使用这个 模块呢？

   <font style="background-color:#20B2AA;color:white">*特别注意！ 保存文件命名时，要满足以下两个规则：1.自定义创建的模块不能和python自带的模块重名，否则系统自带的模块无法使用；2.文件名不能含有中文或其他特殊字符</font>

### 知识点3 模块的导入及使用

- 用关键字<font style="color:purple"> **import**</font> 导入模块


1. 全部导入

   import + 模块名，导入模块的全部内容

   ~~~python
   import test
   a = test.jia(3,5)
   print(a)
   ~~~

   如果觉得文件名比较复杂，可以加上as关键字

   ~~~python
   import test as t
   a = t.jia(3,5)
   print(a)
   ~~~

2. 部分导入

   from + 模块名 + import +（函数名1，函数名2，类名1……），导入模块部分函数

   使用这种导入方式调用函数时，无需在函数名前添加模块名

   ~~~python
   from test import jia
   a = jia(3,5)
   print(a)
   ~~~

   如果使用from + 模块名 + import + * ，则表示全导入

   ~~~python
   from test import *
   a = jia(3,5)
   b = jian(3,5)
   print(a,b)
   ~~~

- 函数dir( )

  内置函数dir()，可以看到模块中都有哪些函数

  ~~~python
  import test
  print(dir(test))
  ~~~

### 知识点4 模块的导入级别

创建两个py文件，test.py和main.py，将test模块导入到main主程序内

1. 导入同级目录模块

   ~~~text
   ├── test.py
   └── main.py
   ~~~

   ~~~python
   #main.py
   import test
   ~~~

2. 导入下级目录模块

   ~~~python
   ├── a/
   │   └── test.py
   └── main.py
   ~~~

   ~~~python
   #main.py
   import a.test
   ~~~

3. 导入上级目录模块（文件名不要用test.py,因为会与sys库冲突导致导入失败）

   ~~~text
   ├── a/
   │   └── main.py
   └── te.py
   ~~~

   ~~~python
   #main.py
   import sys
   sys.path.append('..') 
   #上一级'..',上两级用'../..',上三级'../../..'依次类推
   import te
   ~~~
   
   

## 知识点探秘

<font color=blue>----></font>下列选项中，导入random库的方法错误的是（）

~~~python
A. import random as r
B. from random import *
C. import random
D. import random from as r
~~~

答案：<font color='white'>D</font>

<font color=blue>----></font>在同一个文件夹内有fac.py和Fum.py两个文件，其程序如下（）

~~~python
#fac.py
def fac(n):
    num = 0
    for i in range(1,n):
        num +=i
    return num
~~~

~~~python
#Fum.py
from fac import *
n = int(input())
print(fac(n))
~~~

运行Fum .py文件，输入：10，则输出的结果是（）

A. 36	B. 45	C. 59	D. 81

答案：<font color='white'>B</font>

<font color=blue>----></font>创建一个文件名为rectangle.py的模块，其程序如下：

~~~python
def girth(x,y):
    return (x+y)*2
~~~

现有同一文件夹中的transfer.py文件，其程序如下：

~~~python
from tectangle import *
if __name__ == '__main__'：
	print(girth(20,30))
#__name__表示模块的名字，'__main__'表示当前模块
#if __name__ == '__main__'：表示当前模块是主程序的入口
~~~

运行transfer.py文件，输出的结果是（）

A. girth(20,30)	B. 50	C. 2	D. 100

答案：<font color='white'>D</font>



<font style="background-color:#409EFF;color:white">**超范围知识点：理解   if  \_\_name\__ == '\__main__'：**</font>

1) 定义一个fac模块，再定义一个test模块，运行test模块程序，看看会发生什么？

~~~python
#fac.py
a = 100
~~~

~~~python
#test.py
import fac
print(__name__)
print(fac.__name__)
~~~

2) 定义一个te1模块，再定义一个te2模块，分别单独运行te1和te2模块程序，看看会发生什么？

~~~python
#te1
print(100)
if __name__ == '__main__':
    print(150)
~~~

~~~python
#te2
import te1
~~~

  通过以上两个示例我们可以看出， if  \_\_name\__ == '\__main__'的使用方法：

- 一般多用在主程序模块，用来表明模块间的主次关系，即包含这句话的就是程序主入口
- 如果用在子程序模块，一般用来将测试代码写在这句话下面，用来测试及修改子程序，测试完成将这句话删除掉即可，这样就避免了对主程序的修改

## 巩固练习

<font color=blue>1. </font>下列关于导入模块的说法正确的是（）

​	A. 模块文件必须和主程序保存在同一个文件夹内，主程序才能成功调用模块中的函数

​	B. 无论被导入的模块文件与主程序是否在同一个文件夹下，都不需要指定文件的路径

​	C. 如果import file1.file2.mod1成功导入了模块，其作用是导入file1文件夹下的file2

​		文件夹里的mod1模块

​	D. from mod import my_moudule 这句代码只可能是导入mod模块中的my_module()函数

​	答案：<font color='white'>C</font>

<font color=blue>2. </font>下列说法不正确的是（）

​	A. from A import B,用于从模块A中导入模块B

​	B. from B import *，用于导入模块B的所有内容

​	C. import A,用于导入模块A的所有函数名

​	D. import B from A,用于从模块A中导入函数B

​	答案：<font color='white'>D</font>



------

<center><font color=blue>...End!...</font></center>

------

## 复习

1.按要求写程序

<img src=".\img\module1.png" alt="module1" style="zoom:120%;" />

- 根据上面文件目录结构在D盘创建相关文件夹Pycharm、Source、Common、Study、Dist，以及相关文件CreatData.py、SelectionSort.py、Swap.py

- 编写CreatData.py、SelectionSort.py子模块程序，内容如下：

  ~~~python
  #CreatData.py
  def add(a,b):
  	return a+b
  def mul(a,b):
  	return a*b
  ~~~

  ~~~python
  #SelectionSort.py
  lis1 = [5,8]
  ~~~

- 请自行编写Swap.py主程序，要求使用add函数，计算lis1列表内的数据和（只导入add函数，不导入mul函数）

  答案：见下面隐藏代码块

  <div style="color:white";>
  from CreatData import add
  import sys
  sys.path.append('../')
  from Study.Dist import SelectionSort
  x=SelectionSort.lis1[0]
  y=SelectionSort.lis1[1]
  print(add(x, y))
  </div>

# 专题6 包

## 考查方向

~~~mermaid
graph LR
A(包)-->B1(包的概念及创建方法)
A(包)-->B2(包的导入及使用)
B1-->C1(包的概念和结构)
B1-->C2(创建包)
B2-->D1(导入及使用包里的模块)
~~~



## 知识点清单

### 知识点1 包的概念及创建方法

1. 包的概念和结构

   包：将一组功能相似的模块放在一起，规范代码，避免模块名重复。

   包的结构，实质上，就是包含有\_\_init\_\_.py文件的文件夹。

   

2. 创建包

   创建包的目的：用于组织模块文件，便于管理和维护。当需要同时使用多个模块时，因为包的存在，无需一个一个模块的去导入，只要导入所在的包即可！
   
   如下示例目录结构，我们就创建了一个名为music_pac的包，包内包含有pop_mis.py和classic_msi.py两个模块文件
   
   <img src=".\img\pac.png" alt="pac" style="zoom:60%;" />
   
   

### 知识点2 包的导入及使用

结合以下目录结构及程序文件，我们来理解包的导入及使用

~~~python
#test1.py
def a():
	print('我是pac包下的test1')
~~~

~~~python
#test2.py
def a():
	print('我是pac包下的test2')
~~~

~~~python
#test3.py
def a():
	print('我是pac包下的test3')
~~~

~~~text
├── pac/
│   └── _init_.py
|	└── test1.py
|	└── test2.py
├────── pac_son/
|		└── _init_.py
|		└── test3.py	
└── main.py
~~~

1. 包的导入

   在main.py中写入如下程序：

   ~~~python
   import pac  #导入pac包
   ~~~

2. 使用包里的模块

   - <font style="background-color:#409EFF;color:white">要使用包里的模块，首先要使用\_\_int\_\_.py创建包目录结构，如果包中含有包，那么每一个包都需要配备一个\_\_int\_\_.py文件，然后文件结构会通过递归的方式将一层一层的模块导入进来</font>

     - 情况一：只导入test1.py

       ~~~python
       #在隶属于pac包的__init__.py文件中写入以下内容：
       from . import test1  
       ~~~

       <font style="background-color:#20B2AA;color:white">说明： ‘ . ’表示当前文件夹</font>

       在main.py中写入如下程序：

       ~~~python
       import pac
       pac.test1.a()
       ~~~

       或者这样写：

       ~~~python
       from pac import test1
       test1.a()
       ~~~

       还可以这样写：

       ~~~python
       from pac.test1 import a
       a()
       ~~~

       \^_\^以上的几种写法是不是很熟悉？！

     - 情况二：导入test1.py，test2.py

       ~~~python
       #在隶属于pac包的__init__.py文件中写入以下内容：
       from . import test1 
       from . import test2 
       ~~~

       在main.py中写入如下程序：

       ~~~python
       import pac
       pac.test1.a()
       pac.test2.a()
       ~~~

     - 情况三：只导入test3.py

       ~~~python
       #在隶属于pac包的__init__.py文件中写入以下内容：
       from . import pac_son
       ~~~

       ~~~python
       #在隶属于pac_son包的__init__.py文件中写入以下内容：
       from . import test3 
       ~~~

       在main.py中写入如下程序：

       ~~~python
       import pac
       pac.test3.a()
       ~~~

     - 情况四：导入test1.py，test2.py，test3.py

       ~~~python
       #在隶属于pac包的__init__.py文件中写入以下内容：
       from . import test1 
       from . import test2 
       from . import pac_son
       ~~~

       ~~~python
       #在隶属于pac_son包的__init__.py文件中写入以下内容：
       from . import test3
       ~~~

       在main.py中写入如下程序：

       ~~~python
       import pac
       pac.test1.a()
       pac.test2.a()
       pac.test3.a()
       ~~~

   - main.py和pac包不在同级目录的导入

     既然，包是模块的一种集合，那么就可以把包看做是一种特殊的模块。模块的导入同样适用于包。例如如下的目录结构，

     ~~~text
     ├── pac/
     │   └── _init_.py
     |	└── test1.py
     |	└── test2.py
     ├────── pac_son/
     |		└── _init_.py
     |		└── test3.py	
     ├── fol/
     	└── main.py
     ~~~

     我们可以这样导入：

     ~~~python
     import sys
     sys.path.append('..') 
     
     import pac
     pac.test1.a()
     pac.test2.a()
     pac.test3.a()
     ~~~

## 知识点探秘

<font color=blue>----></font> 创建包时，包文件夹内通常包含的文件是（）

A. admin	B. \_\_init\_\_.py	C. \_\_main\_\_.py	D. \_\_name\_\_.py

答案：<font color='white'>B</font>

<font color=blue>----></font> 包中的模块层级图如图所示，下列表述正确的是（）

~~~mermaid
graph LR
A(p-a)-->B1(mod1)
A-->B2(mod2.py)
B1-->C1(__init__.py)
B1-->C2(mod3.py)
A-->B3(__init__.py)
~~~


A. mod1是包	B. mod1是模块	C. \_\_init\_\_.py是模块	D. \_\_init\_\_.py是包

答案：<font color='white'>A</font>

## 巩固练习

<font color=blue>1. </font>如图所示，需要用到pac1包中的my_moudle2模块，和pac2包中的my_moudle1模块。请写出导入包或模块的代码。要求：只导入所需模块，其余模块不导入。

~~~mermaid
graph LR
A(pac1)-->B1(my_moudle1)
A-->B2(my_moudle2)
A-->B3(pac2)
A-->B4(__init__.py)
B3-->C1(my_moudle1)
B3-->C2(my_moudle2)
B3-->C3(__init__.py)


~~~

答案：见下面隐藏代码块

<div style="color:white";>
import pac1.my_module2
import pac1.pac2.my_module1
</div>

------

<center><font color=blue>...End!...</font></center>

------

## 复习

按照如下目录，在你的电脑上创建贪吃蛇小游戏的文件结构

~~~text
├── Greedy Snake/
    ├── pac/
        └── _init_.py
    	└── snake.py
    	└── food.py
    	└── button.py
    	└── utils.py
    	└── endInterface.py
    ├── resources/
    	├── font/
    		└── Gabriola.ttf
    	├── music/
    		└── bgm.mp3    	
    └── config.py 
    └── main.py
    └── README.md
~~~

名称解释：

~~~python
Greedy Snake/   贪吃蛇游戏文件夹
pac/            包文件夹
_init_.py	    包目录文件
snake.py		蛇程序模块
food.py         食物程序模块
button.py		按钮程序模块
utils.py        工具程序模块
gameover.py		结束画面程序模块
resources/      资源文件夹
font/           字体文件夹
music/          音乐文件夹
config.py		配置文件模块
main.py			主程序模块
README.md		说明书文件
~~~



# 专题7 类

## 考查方向

~~~mermaid
graph LR
a(类)-->b1(类的封装)
a-->b2(类的的继承)
a-->b3(面向对象编程的概念及特点)
b1-->c0(私有变量,私有属性和私有方法)
b2-->c1(继承)
b2-->c2(基类和派生类)
b2-->c3(单继承和多重继承)
b3-->c4(面向对象编程的概念)
b3-->c5(面向对象编程的基本特征)
x1(类的概念)-->y1(类的定义和创建)
x2(如何定义类)-->y1
x3("__init__()方法")-->y1
x6(类变量与实例变量)-->y1
x4(创建类的属性和方法)-->y2(创建类的成员并访问的方法)
x5("__str__()方法")-->y2
y1-->a
y2-->a
~~~

## 知识点清单

### 知识点1 类的定义和创建

1. 类的概念

   **类(Class):** 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。

   例如，我们将所有猫的集合定义成猫类，那么其中的每一只猫都称为该类的一个实例对象。

   ​			假设每只猫都有眼睛、鼻子、耳朵、尾巴，那么我们就称眼睛、鼻子、耳朵、尾巴是每只猫对象共有的属性。

   ​			假设每只猫都能够跑，跳，吃东西，那么我们就可以将跑，跳，吃东西定义成每只猫对象共有的方法。

2. 如何定义类

   ~~~python
   class ClassName(object):
      class_suite  #类体,由类成员（属性，方法）组成
   ~~~

   <font style="background-color:#409EFF;color:white">说明：定义类要使用关键字class，ClassName表示类名，object表示该类继承于哪个类，若没有继承其它类则填写object或什么也不写，最终所有的类都会继承object类（超类）</font>

   示例1：

   ~~~python
   class Cat(object):
       eyes = 2
   ~~~

   说明：以上定义了一个Cat类，Cat类拥有一个属性eyes，属性的值为2

   示例2：

   ~~~python
   class people:
       #定义基本属性
       name = ''
       age = 0
       #定义私有属性,私有属性在类外部无法直接进行访问
       __weight = 0
       #定义构造方法
       def __init__(self,n,a,w):
           self.name = n
           self.age = a
           self.__weight = w
       def speak(self):
           print("%s 说: 我 %d 岁。" %(self.name,self.age))
   
   # 实例化类
   p = people('runoob',10,30)
   p.speak()
   # 查看所定义的类的继承类
   print(people.__base__)
   ~~~

   说明：以上首先定义了一个people类，该类拥有公有属性name、age，私有属性__weight，以及两个方法 \_\_init\_\_()方法和speak()方法；然后对该类进行了实例化，产生一个叫做p的对象；最后调用p对象的speak()方法，并打印查看people类继承的父类是什么。

   ​		<font style="background-color:#20B2AA;color:white">*如果学习过图形化编程scratch，可以类比为每一个角色就是一个实例化的对象，所有对象归属为一个角色类，类中包含各种属性（如角色的大小，颜色，坐标位置等）和方法（如移动，旋转，克隆等）。然后让角色调用类中的各种属性和方法制作各种动画和游戏^^</font>

3.  \_\_init\_\_()方法

   结合以下列子，理解 \_\_init\_\_()方法

   ~~~python
   class Dog:
       def __init__(self,name,color,age):
           self.name = name
           self.color = color
           self.age = age
   cat1 = Dog('小黑','black',5)
   print(cat1.name)
   print(cat1.color)
   print(cat1.age)
   ~~~

   - 大多数人会以为`__init__`方法是构造方法，其实不然。`__init__`方法其实可以叫做**初始化方法**，它的作用是在对象被创建！！！之后！！！，对对象的属性进行初始化。当然习惯上，会被称为构造函数。

   -  \_\_init\_\_()方法的第一个参数代表着创建的实例对象，一般习惯用self表示，之后的参数代表实例化对象的各个属性。

   - 注意区分self.name = name中两个name的区别，前面的name代表实例化对象的属性，后面的name代表传递的参数（当然使用其它参数名同样可以）。

     可以类比想像成以前学习的函数：

     ~~~python
     def test(name): #name表示形参用于接收实参
         name = name #把传进来的“小黑”赋值给变量name
         print(name)
     test('小黑')
     ~~~

4. 类变量与实例变量

   结合以下列子，理解类变量与实例变量

   ~~~python
   class fruit:
       name ='未知'
       color = 'red'
       def __init__(self,name):
           self.name = name
                  
   f1 = fruit('香蕉')
   f2 = fruit('苹果')
   
   print(fruit.name)
   print(f1.name)
   print(f2.name)
   print(f1.color)
   print(f2.color)
   ~~~

   在fruit的类中，name ='未知' 中的name称为类变量；而self.name中的name称为实例变量。

   类变量适用属于该类的所有对象，而实例变量仅归属于创建的实例对象。

### 知识点2 创建类的成员并访问的方法

1. 创建类的属性和方法

   - 无论写入属性数据，还是读取属性数据，都要使用 **self.属性名** 的格式访问
   - 定义类的方法除第一个参数是self外，其余的与定义普通函数的方法相同
   - 类相当于一个抽象模板，实例就是根据模板创造的对象
   - 创建实例时，会根据传入的参数初始化对象的属性数据
   - 类的实例化或者调用类的方法：传入参数时，注意参数的类型和顺序，self参数位置不必传入参数

   ~~~python
   #创建猫类
   class Cat(object):    
       def __init__(self,name,age):	#构建对象属性
           self.name = name
           self.age = age
       def print_info(self):			#创建对象方法
           print('名字：'+self.name,'年龄：'+str(self.age))
           
   
   c1 = Cat('小白', 3)	#创建一个实例，得到对象c1
   c1.print_info()		 #调用对象的方法
   c1.name = '奥特曼'	   #修改对象的属性
   c1.print_info()		 #再次调用对象的方法
   ~~~

2. \_\_str\_\_()方法

   如果在类中定义了\_\_str\_\_()方法，当在类的外面使用print()函数打印实例化的对象时，就会打印输出这个方法返回的字符串数据

   ~~~python
   class Cat:    
       def __init__(self,name):
           self.name = name
       def __str__(self):       
           return  '猫的名字是：'+self.name
           
   c1 = Cat('糖糖')  
   print(c1)
   ~~~

### 知识点3 类的封装

封装：即在设计类时，刻意的将一些属性和方法隐藏在类的内部，这样将无法直接以"类对象.属性名"（或者"类对象.方法名（参数）"）的形式调用这些属性（或方法）

1. 封装机制保证了类内部数据结构的完整性，很好的避免了外部对内部数据的影响，提高了程序的可维护性。
2. 避免用户对类中属性或方法进行不合理的操作。

想象一下，你辛苦写好的类，别人调用时用对象.属性名的方法修改了你的某一个数据，而这个数据又是重要的不可被修改的，那将是多么的悲哀T_T，例如你创建了一个计算2倍数的模块分别给小明和小红使用，如下：

~~~python
class Jisuan(object):
    def __init__(self,n):
        self.n = n
        self.a = 2
    def double(self):
        print(self.a*self.n)
~~~

小红的主程序如下：

~~~python
import module
x = 10
obj = module.Jisuan(x)
obj.double()
~~~

小明的主程序如下：

~~~python
import module
x = 10
obj = module.Jisuan(x)
obj.a = 3
obj.double()
~~~

发现问题了吗？显然，你创建的实例变量a的值被小明修改了，失去了原有的2倍数计算功能，这显然不是我们愿意看到的！！！

那么怎么解决这个问题呢？

我们可以将实例变量a转换为私有变量，从而对类的重要数据或方法进行封装。

~~~python
#修改模块module.py
class Jisuan(object):
    def __init__(self,n):
        self.n = n
        self.__a = 2
    def double(self):
        print(self.__a*self.n)
~~~



**python类如何进行封装**

1. 默认情况下，python类中的变量和方法都是公有的，它们的名称前都没有下划线（_）
2. 如果类中的变量，属性或方法，其名称以双下划线“__”开头，则该变量，属性或方法为私有的。
3. 以双下划线开头和结尾的类方法（如\_\_init\_\_()）是python内部定义的，自己定义时，不要使用这种格式。

运行以下示例，看看封装前后的区别：

~~~python
class Cat:    
    def __init__(self,name,age):
        self.name = name
        self.__age = age
    def print_info(self):       
        print(self.name,self.__age)
    def __print_info(self):       
        print(self.name,self.__age)
        
c1 = Cat('糖糖',3)  

#print(c1.name)
# print(c1.age)
# c1.print_info()
#c1.__print_info()
~~~

### 知识点4 类的继承

1. 继承

   创建新的类可以从现有的类继承，被继承的类叫做基类（或父类、超类），继承得到的新类叫做派生类（或子类）

   ~~~python
   class Person(object):   # 定义一个父类 
       def talk(self):    # 父类中的方法
           print("person is talking....")  
    
   class Chinese(Person):    # 定义一个子类， 继承Person类 
       def walk(self):      # 在子类中定义其自身的方法
           print('is walking...')
    
   c = Chinese()
   c.talk()      # 调用继承的Person类的方法
   c.walk()     # 调用本身的方法
   ~~~

   派生类继承自基类，也就拥有了从基类继承的属性，方法。同时还可以在派生类中增加新的自有属性和方法。

   

2. 基类和派生类

   ​		当派生类从基类继承来的方法不能满足需求时，需要重写基类的同名方法。在派生类中，新方法将覆盖原来的基类方法，这个过程叫作方法的重写（或叫覆盖）。这体现了面向对象编程的又一特性------多态。

   比较以下三个例子，看看它们有什么不同？

   ~~~python
   class parent(object):
       def __init__(self,name,age):
           self.name = name
           self.age = age
       def pint_info(self):
           print('我是父类',self.name,self.age)
   class child(parent):
       pass
   
   a = child('小明',18)
   a.pint_info()
   ~~~

   ~~~python
   class parent(object):
       def __init__(self,name,age):
           self.name = name
           self.age = age
       def pint_info(self):
           print('我是父类',self.name,self.age)
   class child(parent):
       def pint_info(self):
           print('我是子类',self.name,self.age)
           
   a = child('小明',18)
   a.pint_info()
   ~~~

   ~~~python
   class parent(object):
       def __init__(self,name,age):
           self.name = name
           self.age = age
       def pint_info(self):
           print('我是父类',self.name,self.age)
   class child(parent):
       def pint_info(self):
           print('我是子类',self.name,self.age)
           super().pint_info()	#super()函数的作用：调用父类的方法
   a = child('小明',18)
   a.pint_info()
   ~~~

3. 单继承和多重继承

   单继承：一个派生类只继承一个基类
   多重继承：一个派生类继承了多个基类

   ~~~python
   class parent1(object):
       def pr1(self):
           print('父类1被调用')
   
   class parent2(object):
       def pr2(self):
           print('父类2被调用')
   
   class child(parent1,parent2):
       pass
   
   chi = child()
   chi.pr1()
   chi.pr2()
   ~~~

   说明：注意多继承基类书写的先后顺序。如上面class child(parent1,parent2)

   先书写parent1后书写parent2，这时候如果各自的方法重名都叫pr，那么将执行最左侧那个基类的方法，既parent1的pr方法

   ~~~python
   class parent1(object):
       def pr(self):
           print('父类1被调用')
   
   class parent2(object):
       def pr(self):
           print('父类2被调用')
   
   class child(parent1,parent2):
       pass
   
   chi = child()
   chi.pr()
   ~~~

### 知识点5 面向对象编程的概念及特点

1. 面向对象编程的概念

   - 面向对象编程是一种程序设计的思想，就是抽象出类，根据类来创建实例

   - <font color = 'red'>**面向对象最重要的概念就是类（Class）和实例（Instance），必须牢记类是抽象的模板（比如Student类)，而实例是根据类创建出来的一个个具体的“对象”（比如学生甲、乙、丙、丁)，每个对象都拥有相同的方法，但各自的属性数据可能不同**</font>

   - 面向对象编程的思想是：将对象作为程序基本单元，对象包含属性和方法；数据就是属性，处理数据的函数就是方法；对象间传递处理数据的过程就是程序的执行过程。

2. 面向对象编程的基本特征

   - 封装
   - 继承
   - 多态

## 知识点探秘

<font color=blue>----></font>下列选项中，用于定义‘类’的关键字是（）

A. global	B. Global	C. class	D. Class

答案：<font color='white'>C</font>

<font color=blue>----></font>执行下列程序，输出结果是（）

~~~python
class student:
    name = ''
    subject = ''
    score = 0
    def __init__(self,n,a,w):
        self.name = n
        self.subject = a
        self.score = w
    def speak(self):
        print("我%s考了%d分"%(self.subject,self.score))
p = student('Jim', '语文', 100)
p.speak()
~~~

A. Jim语文考了100分	B. 我Jim考了100分	C. Jim考了100分	D. 我语文考了100分

答案：<font color='white'>D</font>

<font color=blue>----></font>阅读程序，说法正确的是（）

~~~python
class parent(object):
    __name = '小明'
    def __init__(self,name):
        self.name = name
    def print_info(self):
        print(self.__name)
class child(parent):
    def __str__(self):
        return self.name

b = child('小虾')
print(b)
a = parent('小鱼')
a.print_info()
~~~

A. 小明 小虾	B. 小鱼 小虾	C. 小虾 小鱼	D. 小虾 小明

答案：<font color='white'>D</font>

<font color=blue>----></font>下列属于面向对象的三个基本特征是（）

A.  封装性、继承性、多样性	

B.  继承性、多态性、封存性	

C.  稳定性、继承性、多态性	

D.  多态性、继承性、封装性

答案：<font color='white'>D</font>

<font color=blue>----></font>执行下列程序，输出结果是（）

~~~python
class Student(object):
    subject = '语文'
    def __init__(self):
        self.subject = '数学'
XiaoMing = Student()
Student.grade = 95
XiaoMing.rank = 5
print("科目：%s,成绩：%d,排名：%d"%(Student.subject,Student.grade,XiaoMing.rank))
~~~

A.  科目：成绩：排名：	

B.  语文 99 1	

C.  科目：%s,成绩：%d,排名：%d	

D.  科目：语文,成绩：95,排名：5

答案：<font color='white'>D</font>

## 巩固练习

<font color=blue>1. </font>按要求写程序

创建一个五子棋的棋子类Chess，该实例化的棋子对象piece具有判定输赢的方法。

（设棋盘大小为m行 * n列，黑色棋子用1表示，白色棋子用-1表示，无棋子用0表示）

例如，有如下6行 * 7列的棋局：

~~~python
five_map = [[0,0,-1,0,0,0,0],
			[0,1,0,-1,1,0,0],
			[0,1,0,1,-1,0,0],
			[0,1,1,0,1,-1,0],
			[1,0,0,-1,0,0,0],
			[0,1,0,0,-1,0,0]]
~~~

输入：黑色棋子，位置5行2列

输出：黑方胜利

输入：黑色棋子，位置5行5列

输出：未胜利，请继续对局

输入：白色棋子，位置5行7列

输出：白方胜利



答案：见下面代码块

~~~python
class Chess(object):
	def __init__(self, color,m, n, map_lis):
		self.color = color
		self.m, self.n = m, n
		self.row = len(map_lis)
		self.column = len(map_lis[0])
		self.map_lis = map_lis
	def victory(self):
		total = 0
		#黑子胜利判断
		if self.color == "black":
			a = 1
			# 横向搜索
			for i in range(self.n+1, self.column):
				if self.map_lis[self.m][i] == a:
					total += a
				else:
					break
			for i in range(self.n-1,-1,-1):
				if self.map_lis[self.m][i] == a:
					total += a
				else:
					break
			if total>=4:
				print('黑方胜利')
				return
			else:
				total = 0
			#纵向搜索
			for i in range(self.m+1, self.row):
				if self.map_lis[i][self.n] == a:
					total += a
				else:
					break
			for i in range(self.m-1,-1,-1):
				if self.map_lis[i][self.n] == a:
					total += a
				else:
					break
			if total>=4:
				print('黑方胜利')
				return
			else:
				total = 0
			#斜45度搜索
			for i in range(1, min(self.m, self.column-1-self.n)+1):
				if self.map_lis[self.m-i][self.n+i] == a:
					total += a
				else:
					break
			for i in range(1, min(self.n, self.row-1-self.m)+1):
				if self.map_lis[self.m+i][self.n-i] == a:
					total += a
				else:
					break
			if total>=4:
					print('黑方胜利')
					return
			else:
				total = 0
			#斜135度搜索
			for i in range(1, min(self.row-1-self.m, self.column-1-self.n)+1):
				if self.map_lis[self.m+i][self.n+i] == a:
					total += a
				else:
					break
			for i in range(1, min(self.m, self.n)+1):
				if self.map_lis[self.m-i][self.n-i] == a:
					total += a
				else:
					break
			if total>=4:
					print('黑方胜利')
					return
			else:
				total = 0
		#白子胜利判断
		if self.color == "white":
			a = -1
			# 横向搜索
			for i in range(self.n+1, self.column):
				if self.map_lis[self.m][i] == a:
					total += a
				else:
					break
			for i in range(self.n-1,-1,-1):
				if self.map_lis[self.m][i] == a:
					total += a
				else:
					break
			if total<=-4:
				print('白方胜利')
				return
			else:
				total = 0
			#纵向搜索
			for i in range(self.m+1, self.row):
				if self.map_lis[i][self.n] == a:
					total += a
				else:
					break
			for i in range(self.m-1,-1,-1):
				if self.map_lis[i][self.n] == a:
					total += a
				else:
					break
			if total<=-4:
				print('白方胜利')
				return
			else:
				total = 0
			#斜45度搜索
			for i in range(1, min(self.m, self.column-1-self.n)+1):
				if self.map_lis[self.m-i][self.n+i] == a:
					total += a
				else:
					break
			for i in range(1, min(self.n, self.row-1-self.m)+1):
				if self.map_lis[self.m+i][self.n-i] == a:
					total += a
				else:
					break
			if total<=-4:
					print('白方胜利')
					return
			else:
				total = 0
			#斜135度搜索
			for i in range(1, min(self.row-1-self.m, self.column-1-self.n)+1):
				if self.map_lis[self.m+i][self.n+i] == a:
					total += a
				else:
					break
			for i in range(1, min(self.m, self.n)+1):
				if self.map_lis[self.m-i][self.n-i] == a:
					total += a
				else:
					break
			if total<=-4:
					print('白方胜利')
					return
			else:
				total = 0
#主程序
map_lis =  [[0,0,-1,0,0,0,0],
			[0,1,0,-1,1,0,0],
			[0,1,0,1,-1,0,0],
			[0,1,1,0,1,-1,0],
			[1,0,0,-1,0,0,0],
			[0,1,0,0,-1,0,0]]
piece = Chess('white', 4, 6, map_lis)  #4行1列
piece.victory()
~~~




------

<center><font color=blue>...End!...</font></center>

------

## 复习

1. 按要求写程序

   - 利用pygame库创建一个按钮类，保存文件名为button.py
   - 利用创建的按钮类，在游戏窗口创建两个按钮，当点击“开始游戏“按钮进入游戏界面，当点击”退出游戏“按钮退出游戏。保存文件名为main.py

   （效果见下图，pygame学习传送门： <a href="../../code/pygame/pygame_cookbook.html"><font color="red">传送</font></a>）

   ![button_class](.\img\button_class.gif)

   答案：见下面隐藏代码块

   <div style="color:white";>#button.py
   import pygame
   class Button():
       def __init__(self,screen,size,pos,btn_text="",color=(100,100,100)):
           self.screen = screen
           self.width,self.height = size
           self.left,self.top = pos
           self.btn_text = btn_text
           self.color = color
           self.font = pygame.font.Font('simkai.ttf', 50)
       def is_hover(self):
           mouse_x,mouse_y = pygame.mouse.get_pos()
           if self.left&lt;mouse_x&lt;self.left+self.width and self.top&lt;mouse_y&lt;self.top+self.height:
               return True
           else:
               return False
       def display(self):
           # if self.is_hover():
           #     self.color = (255,100,100)
           # else:
           #     self.color = (100,100,100)
           pygame.draw.rect(self.screen, self.color, (self.left, self.top, self.width, self.height))
           pygame.draw.line(self.screen, (150,150,150), (self.left,self.top), (self.left+self.width,self.top),5)
           pygame.draw.line(self.screen, (150,150,150), (self.left,self.top-2), (self.left,self.top+self.height),5)
           pygame.draw.line(self.screen, (70,70,70), (self.left,self.top+self.height), (self.left+self.width,self.top+self.height),5)
           pygame.draw.line(self.screen, (70,70,70), (self.left+self.width,self.top+self.height), (self.left+self.width,self.top),5)
           text = self.font.render(self.btn_text, True, (255,255,255))
           rect = text.get_rect(center = (self.left+self.width/2, self.top+self.height/2))
           self.screen.blit(text, rect)
   </div>
   
   
   <div style="color:white";>#main.py
   import pygame, sys
   from button import Button
   def drawGameGrid(screen):
       for x in range(20, 800, 20):
           pygame.draw.line(screen, (150,150,150), (x, 0), (x, 500))
       for y in range(20, 500, 20):
           pygame.draw.line(screen, (150,150,150), (0, y), (800, y))
   def showScore(screen,score):
       font = pygame.font.Font('simkai.ttf',30)
       text = font.render('Score: %d'%score, True, (255,255,255))
       rect = text.get_rect()
       screen.blit(text, rect)
   def main():
       # 游戏初始化
       pygame.init()
       screen = pygame.display.set_mode((800,500))
       pygame.display.set_caption('贪吃蛇')
       clock = pygame.time.Clock()
       screen.fill((0,0,0))
       btn1 = Button(screen, (310,65), (250,150), '开始游戏')
       btn2 = Button(screen, (310,65), (250,250), '退出游戏')
       is_show = True
       while True:
          	for event in pygame.event.get():
               if event.type == pygame.QUIT:
                   sys.exit()
               if pygame.mouse.get_pressed()[0] == True:
       			if is_show:
                       if btn1.is_hover():
                           is_show = False
                           screen.fill((0,0,0))
                       if btn2.is_hover():
                           sys.exit()
           if is_show:
               btn1.display()
               btn2.display()
           else:
               drawGameGrid(screen)
               showScore(screen,0)
           pygame.display.update()
           clock.tick(15)
   if __name__ == '__main__':
       main()
   </div>

# 专题8 命名空间及作用域

## 考查方向

~~~mermaid
graph LR
A(命名空间及作用域)-->B1(全局变量和局部变量)
A-->B2(命名空间和作用域)
B1-->C1(全局变量和局部变量)
B1-->C2(关键字global)
B2-->D1(命名空间)
B2-->D2(作用域)
~~~



## 知识点清单

### 知识点1 全局变量和局部变量

1. 全局变量和局部变量

   程序中变量分两种：全局变量和局部变量

   局部变量：函数内部使用的变量，仅在函数内部有效;当函数结束调用时，变量将不存在

   全局变量：在函数之外定义的变量，在程序执行全过程中有效

   观察下面几个例子：

   ~~~python
   #例子1
   a = 1
   def f():
       a = 2
   f()
   print(a)
   ~~~

   ~~~python
   #例子2
   a = 1
   def f():
       a = 2
       print(a)
   f()
   print(a)
   ~~~

   ~~~python
   #例子3
   a = 1
   def f():
       global a
       a = 2
   f()
   print(a)
   ~~~

   通过以上例子可知，函数内部的局部变量即使与全局变量同名，程序依然不会将局部变量视为全局变量，并且在调用结算后销毁

   结合下面例子理解：结束函数调用变量将不存在

   ~~~python
   a = 1
   def func(m,n):
       x = m + n
       return x
   test = func(1,2)
   print(x)
   ~~~

2. 关键字global

   如果希望函数内声明的局部变量作为全局变量，可使用关键字global。

   ~~~python
   a = 1
   def func(m,n):
       global a 
       a = m + n 
       return m*n
   test = func(100,200)
   print(a)
   ~~~
   
   <font style="background-color:#409EFF;color:white">特别注意：对于列表类型的变量，如果在函数内没有被重新创建，那么函数内对变量的修改将视为对全局变量的修改；否则将视为对同名局部变量的修改。</font>
   
   比较以下三段代码：
   
   ~~~python
   a = []
   def func(m,n):
       a.append(m+n) 
       return m*n
   test = func(100,200)
   print(a)
   ~~~
   
   ~~~python
   a = []
   def func(m,n):
       a = [1,2]
       a.append(m+n) 
       return m*n
   test = func(100,200)
   print(a)
   ~~~
   
   ~~~python
   a = []
   def func(m,n):
       global a
       a = [1,2]
       a.append(m+n) 
       return m*n
   test = func(100,200)
   print(a)
   ~~~
   
   <font style="background-color:#20B2AA;color:white">总结，python使用全局变量和局部变量遵循以下规则：</font>
   
   - <font style="background-color:#20B2AA;color:white">简单数据类型的局部变量仅在函数内部创建和使用，函数结束调用后，局部变量不存在</font>
   - <font style="background-color:#20B2AA;color:white">简单数据类型的局部变量在使用关键字global声明后，作为全局变量使用</font>
   - <font style="background-color:#20B2AA;color:white">对于组合数据类型的全局变量(如列表)，如果在函数内部没有被创建，则函数操作可修改全局变量的值</font>
   - <font style="background-color:#20B2AA;color:white">对于组合数据类型的全局变量，如果函数内部创建了同名的局部变量，函数仅改变局部变量的值</font>

### 知识点2 命名空间和作用域（了解）

1. 命名空间

   命名空间是名称到对象的对应关系，用来记录变量的轨迹，大部分的命名空间都是以字典形式实现的。

   <img src=".\img\what.png" alt="what" style="zoom:100%;" />

   让我们看看命名空间长什么样子：

   ~~~python
   def test(x):
       a = 1
       print(locals())
   test(2)
   ~~~

   你会发现使用locals()函数后，打印出的结果是{'x': 2, 'a': 1}，那么这个字典类型的数据就是一种命名空间。

   所以，内置函数的一系列名字就是一个命名空间，一个模块里的所有名称就是一个命名空间，一个对象的属性集合就是一个命名空间，自定义函数中包含的变量名和参数名构成的集合就是一个命名空间。

   <img src=".\img\what1.gif" alt="what1" style="zoom:80%;" />

   命名空间的作用类似于操作系统中的目录和文件的关系，由于文件很多，不便管理，而且容易重名，于是人们设立若干子目录，

   把文件分别放到不同的子目录中，不同子目录中的文件可以同名。调用文件时应指出文件路径。例如，下面的目录结构：

   ~~~text
   ├── pac/
   │   └── test.py	
   ├── fol/
   	└── test.py
   ~~~

   而命名空间就相当于一张目录表，表里存放着变量名函数名属性名等等相关信息，所以两个命名空间中可以存放同名的信息，例如一段程序中既有全局变量a又有局部变量a，全局变量a存放在全局命名空间中，而局部变量a存在于局部命名空间中。因此命名空间提供了一种避免名称冲突的方法。又比如模块A和模块B中均包含sum()函数，在程序中同时使用这两个函数时，用MouduleA.sum()和MouduleB.sum()表示，即可避免冲突。

   

   **python中有以下三类命名空间：**

   - 内置名称：此命名空间包括python内置函数和内置异常名称，如str，print，TypeError等等
   - 全局名称：此命名空间包括在程序中使用的名称和各种导入模块的名称（如函数名、类名等），这个命名空间在程序被创建时创建，直到程序运行结束时终止。
   - 局部名称：此命名空间包含一个函数中定义的名称，包括函数的参数，局部变量名等

   <img src=".\img\namespace.png" alt="namespace" style="zoom:48%;" />

   

   **命名空间的查找顺序:**

   假设我们要使用变量a，则 Python 的查找顺序为：**局部的命名空间-> 全局命名空间 -> 内置命名空间**

   如果找不到变量，它将放弃查找并引发一个 NameError 异常

   

   **查看命名空间的方法：**

   查看局部命名空间——locals()

   查看全局命名空间——globals()

   查看内置命名空间——dir(builtins)

   ~~~python
   #查看局部命名空间——locals()
   def test(x):
       b = 2
       print(locals())
   test = test(1)
   ~~~

   ~~~python
   #查看全局命名空间——globals()
   a = 1
   print(globals())
   ~~~

   ~~~python
   #查看内置命名空间——dir(builtins)
   import builtins  #导入内置函数及异常库
   print(dir(builtins))
   ~~~

   

2. 作用域

   作用域是指命名空间可以被直接访问的区域。变量并不是在任何位置都可以访问的，作用域决定了可以访问的范围。
   
   例如：
   
   ~~~python
   def te():
       a = 3
       print(a,'我在函数内部,我是局部的变量')
   te()
   print(a,'我在函数外部，我是全局的变量')
   ~~~
   
   python共有四种作用域：
   
   - 局部作用域：包含局部变量，是最内层作用域
   - 全局作用域：包含全局变量，是当前程序的最外层作用域
   - 嵌套作用域：包含非全局变量，介于两个嵌套函数之间（如下面示例）
   - 内置作用域：包含内置变量和关键字
   
   ~~~python
   def a():
       x = 0
       def b():
           pass
   #x即为嵌套作用域内的非全局变量
   ~~~
   
   作用域的查找顺序：
   
   在局部找不到，便会去局部外的局部找（例如闭包），再找不到就会去全局找，再者去内置中找。

![spacename](.\img\spacename.png)

## 知识点探秘

<font color=blue>----></font>执行下列程序，输出结果是（）

~~~python
total = 0
def sum(arg1, arg2):
    global total
    total = arg1 + arg2
    return total
print(sum(10, 20),total)
~~~

A. 0 0	B. 30 0	C. 30 30	D. 0 30

答案：<font color='white'>C</font>

<font color=blue>----></font>执行下列程序，输出结果是（）

~~~python
n = 1
m = 0
def double(a,b):
    global m
    m = a*b
    n = b
    return m+n
result = double(10,20)
print(m,n)
~~~

A. 200 20	B. 0 20	C. 0 1	D. 200 1

答案：<font color='white'>D</font>

## 巩固练习

<font color=blue>1. </font>下列描述正确的是（）

​	A. Python在查找某一名称时，按照内置名称----->全局名称----->局部名称的顺序进行

​	B. 全局作用域是最外层的作用域

​	C. 函数内部声明的变量就是全局变量

​	D. 关键字global可将局部变量声明为全局变量使用

​	答案：<font color='white'>D</font>

<font color=blue>2. </font>执行下列程序，输出结果是（）

~~~python
ls = []
lt = []
def knock(s):
    ls = []
    lt.append(s*2)
    ls.append(s*3)
    return s
ts = knock('D~')
print(lt, ls)
~~~

A. ['D\~D\~'] ['D\~D\~']	B. ['D\~D\~'] []	C. [] ['D\~D\~']	D. 程序报错

答案：<font color='white'>B</font>

------

<center><font color=blue>...End!...</font></center>

------

## 复习

<img src=".\img\snake_food.png" alt="snake_food" style="zoom:100%;" />

1.按要求写程序

- 创建Apple类，要求能在贪吃蛇游戏中随机产生一个红色的圆点作为贪吃蛇的食物（如上图）

  答案：见下面隐藏代码块

  <div style="color:white";>
  import pygame, random
  class Apple():
      def __init__(self,screen,color,radius,snake_pos):
          self.screen = screen
          self.color = color
          self.radius = radius
          while True:
              self.pos = [random.randint(0, 800/20-1),random.randint(0, 500/20-1)] #[行号，列号]
              if self.pos not in snake_pos:
                  self.center_x,self.center_y = 10+20*self.pos[0],10+20*self.pos[1]
                  break
      def display(self):
          pygame.draw.circle(self.screen, self.color, (self.center_x,self.center_y), self.radius)
  </div>

- 将上一章节的主程序main.py进行改写，要求将drawGameGrid()，showScore()两个函数写入到新的模块utils.py，改写后的主程序如下：

  ~~~python
  import pygame, sys
  from button import Button
  from food import Apple
  from utils import drawGameGrid, showScore
  def main():
      # 游戏初始化
      pygame.init()
      screen = pygame.display.set_mode((800,500))
      pygame.display.set_caption('贪吃蛇')
      clock = pygame.time.Clock()
      screen.fill((0,0,0))
      btn1 = Button(screen, (310,65), (250,150), '开始游戏')
      btn2 = Button(screen, (310,65), (250,250), '退出游戏')
      apple = Apple(screen, (255,0,0), 8,[[0,0]]) #蛇类未创建，暂时用[[0,0]]替代
      is_show = True
      while True:
         	for event in pygame.event.get():
              if event.type == pygame.QUIT:
                  sys.exit()
              if pygame.mouse.get_pressed()[0] == True:
                  if is_show:
                      if btn1.is_hover():
                          is_show = False
                          screen.fill((0,0,0))
                      if btn2.is_hover():
                          sys.exit()
          if is_show:
              btn1.display()
              btn2.display()
          else:
              drawGameGrid(screen)
              showScore(screen,0)
              apple.display()
          pygame.display.update()
          clock.tick(15)
  if __name__ == '__main__':
      main()
  ~~~
  
  

# 专题9 第三方库的获取及使用

## 考查方向

~~~mermaid
graph LR
A(第三方库的获取和使用)-->B(第三库的获取)
A-->C(jieba库的使用)
A-->D(pyinstaller库的使用)
A-->E(wordcloud库的使用)
B-->X1(什么是第三方库)
B-->X2(安装第三方库的三种方法)
B-->X3(pip常用命令)
C-->Y1(jieba库的安装及使用)
D-->Z1(pyinstaller库的安装及使用)
E-->Q2(wordcloud库的安装及使用)
E-->Q1(wordcloud库和jieba库的综合使用)
~~~



## 知识点清单

### 知识点1 第三方库的获取

1. 什么是第三方库

   - python库：具有相关功能模块的集合，帮助编程者轻松实现强大的功能。

   - python库包括标准库和第三方库。

   - 标准库是自带的，第三方库需要下载安装。

2. 安装第三方库的三种方法

   pip工具安装：pip install + 库名，（国外服务器很慢建议使用国内的清华镜像）

   自定义安装：安装第三方库提供的说明进行安装，多用于在pip中未登记的库或pip安装失败的库。

   文件安装：可以用pip下载，但无法安装，因为文件没有被编译过（提供的文件是源码而非可执行文件，例如github上的源码文件），这就需要先进行编译，然后再进行安装。（其实吧…………清华镜像里基本都有编译好的，哪用那么麻烦！额哈哈哈哈！！！）

   <font color = red>清华镜像：</font>

   ```
   pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
   ```

3. pip常用命令

   查看已安装的库：pip list

   其它的命令：……用时候上网搜……

### 知识点2 jieba库的使用

1. jieba库的安装及使用

   jieba库是一个中文分词函数库，就是将中文文本进行拆分，获得单个词语。jieba库利用中文词库，分析汉字之间的关联概率，将概率大的组成词组，返回词组列表。

   结巴库提供三种分词模式：

   - 精确模式：函数jieba.lcut()，将文本精确的切分开。

     参数为字符串类型，返回值为列表类型。

   - 全模式：函数jieba.lcut(s,cut_all=True)，把文本中所有可能的词组都找出来。

     参数为字符串类型，返回值为列表类型。

   - 搜索模式：函数jieba.lcut_for_search(s)，在精确模式的基础上，对长词再进行切分。

     参数为字符串类型，返回值为列表类型。

   ~~~python
   import jieba
   s = '今天下雪雪好大懒懒不想出去玩！因为出去玩没有小朋友！'
   li1 = jieba.lcut(s)
   li2 = jieba.lcut(s,cut_all = True)
   li3 = jieba.lcut_for_search(s)
   print(li1)
   print(li2)
   print(li3)
   ~~~


### 知识点3 pyinstaller库的使用

1. pyinstaller库的安装及使用

   pyinstaller库是将python程序打包成windows操作系统的可执行文件（后缀名为.exe）。
   
   - 常用命令：
   
     pyinstaller -F xxx.py				 	只生成单个exe文件
   
     pyinstaller -D xxx.py				    生成带有很多依赖文件的exe文件
   
     pyinstaller -i xxx.ico xxx.py		 生成带有图标的和很多依赖文件的exe文件
   
     pyinstaller -F -i xxx.ico xxx.py	 生成带有图标的单个exe文件
   
   - 其它命令或者多文件打包：……用时候上网搜……
   
2. python打包文件为什么会那么大？

   ​		我们写的python脚本是不能脱离python解释器单独运行的，所以在打包的时候，至少会将python解释器和脚本一起打包，同样，为了打包的exe能正常运行，会把我们所有安装的第三方包一并打包到exe。

   ​		即使我们的项目只使用的一个pgzero包，但是可能我们还安装了其他n个包，但是他不管，因为包和包只有依赖关系的。比如我们只装了一个pgzero包，但是pgzero包会顺带装了一些其他依赖的小包，所以为了安全，只能将所有第三方包+python解释器一起打包。

   ​		即使我们的项目只是一个空文件，打包后依然有6到8兆。

3. 利用虚拟环境打包

   - pyinstaller在真实环境中打包会附带一些用不到的库和关联文件，使得打包的文件很大，这时我们可以利用虚拟环境来解决。

   - 虚拟环境类似于一个独立的空间，在其中只安装能用到的库和关联文件，和真实环境区分开，这样在虚拟环境下打包的文件就可以缩小尺寸。而且在虚拟环境里编程不用担心影响外部环境的其它程序，可以随意更改删除，一旦出现问题可以重新创建一个新环境再来过，成本低代价小。

   - 实现步骤：（以在D:盘的test文件夹内创建虚拟环境并打包一个lianxi.py程序为例，程序内容为上面的jieba示例）

     - 创建虚拟环境目录

       2. 打开test文件夹并在上方的文件路径框输入cmd并回车，进入命令提示符窗口

       2. 在命令窗口输入以下命令，创建名为venv1的一个虚拟环境。

          ~~~shell
          python -m venv venv1
          ~~~

       3. 进入venv1文件夹，并激活虚拟环境

          - 在命令窗口继续输入以下命令，进入venv1文件夹

            ~~~shell
            cd venv1
            ~~~
       
          - 在命令窗口继续输入以下命令，激活虚拟环境

            ~~~she
            Scripts\activate.bat
            ~~~
       
     - 在虚拟环境下打包

       1. 将打包文件lianxi.py放在虚拟环境venv1中

       2. 重新安装pyinstaller（很重要，不安装会使用真实环境的）及打包文件所依赖的库

          ~~~shel
          pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pyinstaller
          ~~~

          ~~~shell
          pip install -i https://pypi.tuna.tsinghua.edu.cn/simple jieba
          ~~~
       
       3. 打包
       
          ~~~shell
          pyinstaller -F lianxi.py
          ~~~

### 知识点2 wordcloud库的使用

1. wordcloud库的安装及使用

   <img src=".\img\wordcloud.png" alt="wordcloud" style="zoom:25%;" />

   wordcloud库是一个词云展示库，是以直观艺术的方式将高频词汇进行视觉化展示，使浏览者可以快速获得文本关键信息。

   代码示例1：

   ~~~python
   from wordcloud import WordCloud 
   text = '''
   葫芦娃  葫芦娃  一根藤上七朵花
   小小树藤  是我家  啦啦啦啦
   叮当当咚咚当当  小树藤
   叮当当咚咚当当  是我家  啦啦啦啦
   葫芦娃  葫芦娃  七个娃
   葫芦娃  葫芦娃  一根藤上七个娃
   风吹雨打  都不怕  啦啦啦啦
   叮当当咚咚当当  葫芦娃
   叮当当咚咚当当  本领大  啦啦啦啦
   葫芦娃  葫芦娃  本领大
   '''
   wc = WordCloud(font_path='C:\\Windows\\Fonts\\STXINGKA.TTF',background_color='white')
   wc.generate(text)
   wc.to_file('1.png')
   ~~~

   代码示例2：

   ~~~python
   from wordcloud import WordCloud 
   f = open('huluwa.txt','r',encoding='utf-8')  #将.txt保存时为utf-8编码
   content = f.read()
   wc = WordCloud(font_path="C:\\Windows\\Fonts\\msyhbd.ttf",width=800,height=600,background_color='white')
   wc.generate(content)
   wc.to_file('2.png')
   f.close()
   ~~~

   代码示例3：（ <a href="./img/mask.jpg"><font color="red">mask.jpg</font></a>）

   ~~~python
   from wordcloud import WordCloud 
   from PIL import Image
   import numpy as np
   text = '''
   先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
   宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
   侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
   将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
   亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
   臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
   先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
   愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。
   今当远离，临表涕零，不知所言。
   '''
   img = np.array(Image.open('mask.jpg'))  #图片必须是白底的，文字占据非白底部分
   wc = WordCloud(font_path='C:\\Windows\\Fonts\\STXINGKA.TTF',mask=img,background_color='white')
   wc.generate(text)
   wc.to_file('3.png')
   ~~~

2. wordcloud库和jieba库的综合使用

   ​		一段信息往往需要分析出关键词，高频词，这样可以使人迅速捕捉到有用信息。而wordcloud库和jieba库的结合使用，可以很好的解决这样的问题。
   
   分析内容：鲁迅的小说《孔乙己》（ <a href="./dcs/kongyiji.md"><font color="green">传送</font></a>）
   
   ~~~python
   from wordcloud import WordCloud 
   import jieba
   f = open('kongyiji.txt','r',encoding='utf-8')
   text = f.read()
   text = ''.join(jieba.cut(text))
   wc = WordCloud(font_path="C:\\Windows\\Fonts\\msyhbd.ttf",width=800,height=600,background_color='white')
   wc.generate(text)
   wc.to_file('4.png')
   f.close()
   ~~~

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

