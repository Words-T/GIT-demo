配置
name
git config --global user.name "lam"
email
git config --global user.email "2472503584@qq.com"

git status 查看当前文件状态
git init 初始化
文件状态
git 中的文件有两种状态：未跟踪和已跟踪
未跟踪：表示文件没有被 git 管理
已跟踪：表示文件被 git 管理，已跟踪又分为三种状态：未修改；暂存；已修改
未修改：表示磁盘的文件与 git 仓库文件相同
暂存：表示磁盘文件修改并且保存，但是未提交到 git 仓库
已修改：表示磁盘文件已经修改，但是还未保存也未提交到 git 仓库

刚刚添加到项目中的文件处于未跟踪状态
未跟踪--》暂存
git add <filename>将文件从未跟踪切换到暂存
git add \* 将所有已修改或者未跟踪的文件暂存
暂存--》未修改
git commit -m "提示信息"将文件存储到仓库
git commit -a -m “提示信息”将所有已修改文件提交到仓库（未跟踪不会提交）
未修改--》已修改
修改代码后，文件会变成已修改状态

git log 查看每次修改情况
git restore <filename> 恢复文件
git restore --staged <filename>取消暂存
git re <filename>删除
git re <filename>-f 强制删除
git mv from to 移动文件 重命名
git branch <分支名> 创建分支
git switch <分支名>切换分支
git branch -d <分支名>删除分支
git switch -c <分支名>创建并且切换分支
git merge <分支名>合并

变基（rebase）另一种合并方式
我们通过 merge 合并分支时，在提交记录中会将所有分支合并的过程全部显示出来，当项目复杂时，我们必须反复创建、删除、合并。这样一来会使得提交记录变得混乱

git rebase master
git switch master
git merge bug1
git branch -d bug1

将本地库上传 gihub
git remote add origin https://github.com/Words-T/git-demo.git （origin 名字）
git branch -M main 将主分支名字修改为 main
git push -u origin main 将代码 push 到 github
将本地库上传 gitee
git remote add gitee https://gitee.com/smartword-kl/git-demo.git
git push -u origin master
