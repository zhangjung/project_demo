# Git / 起步

learning git —— 一个帮助初学者快速理解 Git 和 GitHub 的中文交互式学习页面。

## 项目内容

- Git 的三个核心区域：工作区、暂存区、仓库
- 日常工作流：修改 → 暂存 → 提交 → 推送
- 常用 Git 命令速查
- 命令一键复制
- Git/GitHub 小测验
- 深色模式
- 移动端响应式布局

## 文件说明

- `index.html`：页面结构和学习内容
- `style.css`：页面样式和响应式布局
- `script.js`：主题切换、命令筛选、复制和小测验交互

## 本地运行

直接用浏览器打开 `index.html` 即可，无需安装依赖或启动服务器。

也可以在项目目录执行：

```bash
python -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 推荐学习流程

```bash
git status
git add .
git commit -m "说明本次修改"
git push origin main
```

## 在线地址

[GitHub 仓库](https://github.com/zhangjung/project_demo)
