### GitHub 如何部署写好的H5静态页面

> 感谢@粉皮zu的私信，又有素材写笔记了。(●'◡'●)
>
> 刚好记录一下我示例代码的GitHub部署配置，以便于后期追加仓库。

#### 效果

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813223120980-1025164615.png)

#### 环境

- git
- win

#### 步骤

##### 第一步 新建仓库

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813215844897-988064171.png)

##### 第二步 拉取代码

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813220257980-684729700.png)

将仓库clone到本地

```shell
git clone 地址
```

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813220401637-154433293.png)

##### 第三步 部署文件

新建`.github\workflows\static.yml`文件

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Pages
        uses: actions/configure-pages@v2
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload entire repository
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

##### 第四步  将写好的代码复制到根目录下

目录结构例如

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813221748196-408711916.png)

运行测试这里推荐使用Visual Studio Code + Live Server测试代码很方便。

##### 第五步 提交代码

```shell
git add .
git commit -m '第一次提交'
git push
```

然后就会发现部署失败了😅

##### 第六步 设置仓库

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813222512767-1561382636.png)

然后将Action中错误的流水线重新运行

然后就就就....可以了...哈哈哈哈

![img](https://img2023.cnblogs.com/blog/1415778/202308/1415778-20230813223031969-1117005158.png)

成功之后这里会出现在线地址

#### 地址

仓库 https://github.com/ToMeShare/H5.Examples

在线 https://tomeshare.github.io/H5.Examples/



