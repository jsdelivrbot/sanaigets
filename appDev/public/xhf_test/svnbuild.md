###SVN搭建
1.安装svn服务器端

yum install subversion      
从镜像下载安装svn服务器端
中间会提示是否ok，输入y，确认
安装成功提示：.....complete！
依次执行如下命令：
cd /usr/local/              //进入目录，准备创建svn目录

mkdir svnRepo                   //创建一个svn目录

chmod -R 777 svnRepo            //修改目录权限为777

svnadmin create /usr/local/svnRepo/first  //创建一个svn版本仓库first(first可以随便起名字)

cd first/conf               //进入first版本仓库下的配置文件目录


2.下面要修改这个目录下的三个配置文件


(1)vi svnserve.conf    //配置版本库信息和用户文件和用户密码文件的路径、版本库路径


把

# anon-access = read

# auth-access = write

# password-db = passwd
//这四行，前面的#号和空格去掉，变成

anon-access = none      //改成none

auth-access = write

password-db = passwd

realm = first           //改成自己的版本库
保存退出



(2)vi authz     //文件,创建svn组和组用户的权限

[groups]

first = ddl,shl //创建一个first的组，并制定两个用户ddl和shl

[/]             //制定根目录下的权限

@first = rw     //first组用户权限为读写

* = r           //其他用户只有读权限

保存退出


(3) vi passwd   //创建或修改用户密码

[users]

ddl = 123456    //用户名为gep的用户的密码为123456

shl = 123456    //。。。

保存退出


3.然后要设置自启动

vi /etc/rc.local    
打开自启动文件
文件内容如下

#!/bin/sh
#
# This script will be executed *after* all the other init scripts.
# You can put your own initialization stuff in here if you don't
# want to do the full Sys V style init stuff.

touch /var/lock/subsys/local
添加下面一行
svnserve -d -r /usr/local/svnRepo/first

保存退出

ps aux |grep 'svn'  查找所有svn启动的进程
杀死 然后启动svn
svnserve -d -r /usr/local/svnRepo/first 启动svn(可以把这个放到/etc/local/rc.local文件中，实现开机自启动)


SVN版本库起动方式，现在svnRepo下面有 first、test 两个版本库

1：单版本库起动    svnserve -d -r /usr/local/svnRepo/first
2：多版本库起动    svnserve -d -r /usr/local/svnRepo
区别在于起动svn时候的命令中的启动参数-r指定的目录。



4.限制不同的用户对不同的版本库操作权限，修改版本库中的conf目录下的 authz文件

以配置 first 版本库为例

vi authz

[groups]

company = user1,user2

[first:/]             //指定版本库跟目录下的权限

@company = rw     //company组用户权限为读写

* = r           //其他用户只有读权限
保存退出



vi passwd 设置组中用户的账号和密码

[users]

user1  = 123456

user2 = 123456

5.客户端访问
假设客户端使用tortoiseSVN
打开资源库浏览器输入地址, svn://你的svn服务器ip:3690
输入用户名ddl 密码12345
因为没有网资源库里放文件所以需要你用客户端右键【create forder】，然后【add forder】