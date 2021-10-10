# html



#### 上传本地文件到gitee仓库
一、上传新项目

0.  下载并安装git win版本
1.  在所需上传文件的所在文件夹，右键点击git bash
2.  配置用户环境，命令：git config --global user.name "yuhaoweilai"
                 命令：git config --global user.email "13*****0415@***.com"
3.  将该目录进行git初始化，命令：git init
4.  将文件夹绑定到git，命令：git add .
5.  绑定远程仓库地址，命令：git remote add origin https://gitee.com/yuhaoweilai/html.git
6.  提交文件描述信息,命令：git commit -m "first commit"
7.  提交本地项目到远程仓库，命令：git push origin master
    二次上传发送fetch错误，可以强制覆盖 命令：git push origin master -f
8.  连接成功后需要输入用户名：yuhaoweilai及密码：*********
9.  本地文件更新同步到远程，命令1.git add . 命令2.git commit -m "first commit" 命令3.git push origin master

二、上传单个文件
1.  git add 文件路径
2.  git commit -m "xxx"
3.  git push

三、下载
git clone https:\\*****.git
