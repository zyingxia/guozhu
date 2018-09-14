# git 的复习和使用



## 安装 git

- [官网](https://git-scm.com/)
- 直接点击download就可以
- 下载一个 exe 安装包
- 不停的下一步  完成
- 检查是否安装
  - 打开 cmd  window + R cmd 回车
  - 输入指令 `git --version`
  - 能输出版本号就可以



## 进行一些 git 的配置

- 初始化 giit 的一个配置，只要以后不换电脑不做系统都不用配置了
- username
- useremail
- 打开命令行
  - 先查看配置 `git config --list`  注意空格
  - user.name 的位置可以不是 github 的用户名，但是尽量一致
  - user.email 一定要是一个可以收到邮件的邮箱
  - 配置邮箱和用户名
    - `git config --global user.name "你的用户名"`
    - `git config --global user.email "你的真实邮箱"`



## 使用 git

### 什么是git

- 版本管理工具
- 就是一个软件（属于一个命令行的软件）
- 类似于终端一样的一个命令行
  - 第一天我做了一个项目  1.0
  - 第二天我要增加一些功能，添加了功能 A  1.2
  - 第三天PM 要我增加功能 B，要在 1.0 的基础上添加  1.3（git 可以直接还原 1.0）
  - 第四天PM 要求我增加功能C 要在 1.2 的基础上添加
  - 第五天上线，老大要求只要 1.0 直接上线就可以了
  - 第六天，老大换人，呀求 1.3 版本上线，我可以回到 1.3 版本
  - git 可以记录我们的每一个过程
- 协同开发的工具
  - 基于 github
  - 上传一个文件会有主分支 master（做基础建设）
  - 第一个人写一个登录功能   创建一个 login 分支       
  - 第二个人写一个广告功能  创建一个 banner  分支 
  - 可以把他当做一个线上的备份
  - 慢慢的变成了一个社区

## git 和 github

- git 是在本地管理我的文件夹，并且可以把文件夹内的内容放到 github 这个远程地址上
- github 可以理解为一个远程的文件夹（同时他也是一个社区）



- `wdbbdpd223322.github.io`



### git 的使用

### 第一次上传

- 想把哪个文件夹交给 git 来管理
  - 建立好文件夹以后
  - 进入文件夹
  - 鼠标右键点击 git bash here
  - 输入指令 `git init`
  - 是在初始化这个文件夹，就是把文件夹交给 git 来管理
  - 成功以后会出现一个 .git 的文件夹（隐藏文件夹）
- 文件夹中，那些东西上传到 github 上
  - git 不允许上传空文件夹
  - 输入指令 `git add .`
    - . 全部
    - 移动WEB第一天/ 上传这个文件夹
    - index.html  上传这个文件
  - 是放在暂存区（现在还没有上传，只是准备把这些东西上传）
  - 查看一下状态 `git status `
- 对本次上传做一个说明
  - 输入指令 `git commit -m "说明"`
  - 对本次的说明，记录一下上传的内容
- 上传到 github 的仓库
  - 上传到哪一个 github 的仓库（与 github 的仓库关联）
  - `git remote add origin 你的github 仓库地址`
- 就要开始上传
  - 输入指令 `git push -u origin master`

### 第二次上传

- 打开 git bash
- git add .
- git commit -m "second"
- 不需要再次关联仓库，直接上传就可以了
- git push





## 密钥

- 打开 cmd 窗口
- 指令 `ssh-keygen -t rsa -C "你的全局邮箱"`
- 一直回车，出现一个画面

