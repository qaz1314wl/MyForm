#一.Git配置
####1.查看主机上是否已经存在SSH密钥

	cd ~/.ssh
	
	
如果返回
`bash: cd: /c/Users/coder/.ssh: No such file or directory`
说明主机上不存在SSH密钥，需要创建SSH密钥。
####2.创建SSH密钥
	ssh-keygen -t rsa -C "xxxx@xx.com"
在～/.ssh目录下自动生成两个文件id_rsa id_rsa.pub  
复制文件id_rsa.pub里的密钥到GitHub上
####3.测试SSH链接GitHub
	ssh -T git@github.com
	
显示以下内容说明链接成功
```Hi coder-kk596!  
You've successfully authenticated, but GitHub does not provide shell access.```
####4.设置Git信息
	git config --global user.name "xxxx"
	git cinfig --global user.email "xxx@xx.com"
####4.查看配置信息
	git config --list
---

#二.Git基础
##1.获取Git仓库
两种方式

* 现有目录中初始化仓库  
`git init`
* 克隆现有的仓库  
`git clone [https://协议|git://协议|SSH传输协议]`

##2.记录每次更新到仓库
###检查当前文件状态
`git status`  

紧凑格式输出：`git status -s` | `git status -short`  
`??`:新添加的未跟踪文件  
`A`:新添加到暂存区的文件  
`[ ]M(出现在右边)`:文件被修改了，但未放入暂存区  
`M[ ](出现在左边)`:文件被修改了且已放入暂存区  
`MM`:在工作区被修改并提交到暂存区后，又在工作区中被修改了

###跟踪新文件
`git add [fileName|directory]`  
跟踪文件后，文件被放在暂存区。
###修改暂存文件
当修改已跟踪的文件时，运行`git status`提示`Changes not staged for commit:`，说明已跟踪文件的内容修改了，但是未放到暂存区。使用命令`git add`将修改后的文件更新到暂存区。  
`git add`:可用于跟踪新文件 | 更新已跟踪文件到暂存区 | 合并时把有冲突文件标记为已解决文件状态

###忽略文件
有些文件无需纳入Git管理，也无需出现在未跟踪文件列表。创建`.gitignore`的文件，列出要忽略的文件模式。  
【后续补充】

###查看已暂存和未暂存的修改

####1.查看未暂存文件的变化内容
__命令__：`git diff`   
同时修改`test1.txt` `test2.txt`两个文件内容，`test2.txt`
文件执行`git add`命令。使用`git diff`可以查看尚未暂存文件也就是`test1.txt`变化的内容有哪些。  

`git diff`   

![Alt 工作区、暂存区、版本库三者关系图](/Users/coder/desktop/Git_img/git4.png)

####2.查看已暂存文件将要提交的变化内容
__命令__：`git diff cached` | `git diff --staged`

![Alt 工作区、暂存区、版本库三者关系图](/Users/coder/desktop/Git_img/git4.png)

####3.查看版本之间的变化
`git diff commitID commitID`

###提交更新
__命令__：`git commit -m "xxxxxx"`  
__命令__：`git commit` 启动文本编辑器输入本次提交的说明

###跳过使用暂存区，直接提交文件到版本库
`git commit -a "xxxxx"`  
`git commit -am "xxxxx"`

###移除文件
* __命令__：`git rm [fileName]`  
* 删除之前修改过并且已经放到暂存区，必须要用强制删除选项`-f`。这是一种安全特性，用于防止误删还没有添加到快照的数据，这样的数据不能被 Git 恢复。  `git rm --f [fileName]`
* 删除暂存区保留工作区内容：`git rm --cached [fileName]`

###移动文件
__命令__:`git mv file_from file_to`


##3.查看提交历史
###查看提交历史
__命令__：`git log`



##4.	撤销、回滚操作

###撤销操作
__命令__：	`git commit --amend`
###存在多种情形，从以下几个方面进行分析
####(1).本地仓库操作的撤销
* 撤销在工作区进行修改的文件  
`git checkout test.txt`  
批量  
`git checkout .`
* 多个文件提交到暂存区时，回滚到工作区，取消指定文件的缓存  
[举个栗子]  
工作区同时修改test.txt test1.txt，并且将两个文件提交到暂存区
`git add .`   
取消test.txt的缓存    
`git reset HEAD test.txt`   
这时候，提交操作到版本库  
`git commit -m "change1"`  
通过 `git status -s` 只有test1.txt文件的修改提交到版本库  
将文件test.txt提交到版本库  
`git commit -am "change1 for test.txt" `  
* 文件执行`git add`操作，撤销缓存的同时撤销修改（暂存区回滚）  
`git reset HEAD test.txt`  
`git checkout test.txt`  
* 文件已经提交到版本库，但想要再次修改，并且不产生新的commit  
修改文件后  
`git add test.txt`  
`git commit -amend -m "change2"`  
* 文件多次执行`git commit`，Git撤销到某个commit  
`git reset --hard HEAD^`  
`git reset [--hard|soft|mixed|merge|keep] [commitID|HEAD]`  
`HEAD` 当前版本  
`HEAD^` 上一个版本  
`HEAD^^` 上上个版本  
`HEAD~100` 往上第100个版本  

###(2).已推送到远程仓库操作的回滚
* 撤销文件到指定版本，重新push  
 查看指定文件历史版本  
`git log test.txt`   
 回滚  
`git checkout commitID test.txt`  
提交到本地仓库，push  
`git add test.txt`  
`git commit -m "xxxxx"`  
`git push origin master`  
* 删除最后一次远程push  
方式一：使用revert  
`git revert HEAD`  
`git push origin master`  
方式二：使用reset  
`git reset --hard HEAD^`  
`git push origin master -f`  

	__revert__:放弃指定提交的修改，会生成一次新的commit，以前的提示记录依然存在  
__reset__:指将HEAD指针指到指定提交，历史记录不会出现放弃的提交记录

__revert与reset的区别__:  
revert 生成一个新的提交来撤销某次操作，此次提交之前的commit都会被保留。

reset 回到某次提交，提交及之前的commit都会被保留，但是此次提交之后的修改都会被退回到暂存区。


* 回滚某次提交  
`git log`  
`git revert commitID` 

--- 
删除提交  
* 查看历史提交  
`git log --online -n5`
* 编辑框中删除commit  
`git rebase -i "commitID"^`  
编辑状态下删除commit  “pick commitID commit描述”  
* 推送到远程仓库  
`git push origin master -f`



---
##Git工作区、暂存区、版本库（仓库）的基本概念。  
**工作区**：电脑中我们能看到的目录  
**暂存区**：stage或者index。一般存放在.git/index目录下  
**版本库**：工作区有一个隐藏目录.git

![Alt 工作区、暂存区、版本库三者关系图](/Users/coder/desktop/Git_img/g1.jpg)




##5.分支
###1.创建分支
* 方式一：  
创建并切换至分支`git checkout -b dev`
* 方式二：  
创建分支`git branch dev`  
切换分支`git checkout dev`

###2.查看分支
`git branch`

###3.合并分支
Fast forward:
`git merge dev`

###4.删除分支
`git branch -d dev`

###5.解决冲突
为何出现冲突?
![Alt](/Users/coder/desktop/Git_img/git2.png)

在分支master和dev上都进行了操作，提交到仓库会有冲突。  
解决方法：修改文件内容后，合并分支  
切换到分支master `git add test1.txt`  
`git commit -m "xxxxx"`  
删除分支：`git branch -d dev`  
![Alt](/Users/coder/desktop/Git_img/git3.png)




