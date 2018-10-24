## react-tsx-scripts 【 B 】

## **相关包**

- commander 获取命令行传参
- download-git-repo 前往git仓库，下载模板和配置文件
- inquirer 命令行交互的时候你需要填 project name 等一系列信息（最终给 package.json 模板使用）
- handlebars 渲染仓库中的`package.json`模板
- ora 下载过程中的动画效果
- chalk 终端字体添加颜色
- log-symbols 终端上显示 √ 或 × 图标
- react-tsx-scripts 安装 react 项目依赖
- cross-spawn 解决跨平台使用npm命令的问题

`npm i -S commander download-git-repo inquirer handlebars ora chalk log-symbols react-tsx-scripts cross-spawn`

- colors 命令行带颜色输出
- fs-extra fs基础上增加了一些新的方法

## **devDependencies 与 dependencies 的区别**

`package.json`

- devDependencies 开发阶段的依赖包，通过npm安装当前包后，依赖包不会下载 `-D`
- dependencies 生成阶段的依赖包，通过npm安装当前包后，依赖包会下载 `-S`