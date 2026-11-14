# React 实时数字时钟

这是一个基于 React 和 Create React App 的示例项目，展示如何使用类组件状态和生命周期方法实现实时更新的时钟。

## 功能

- 页面显示问候语和当前本地时间。
- 时钟每秒更新一次。
- 组件卸载时清除定时器，避免定时器持续运行。

## 启动项目

需要安装 Node.js 和 npm。在项目根目录运行：

```bash
npm install
npm start
```

开发服务器启动后，在浏览器中访问终端显示的本地地址。

## 可用命令

```bash
npm start      # 启动开发服务器
npm test       # 运行测试
npm run build  # 构建生产版本
```

## 主要文件

- `src/App.js`：应用入口组件。
- `src/components/Clock.jsx`：时钟组件及定时更新逻辑。
- `src/index.js`：React DOM 挂载入口。