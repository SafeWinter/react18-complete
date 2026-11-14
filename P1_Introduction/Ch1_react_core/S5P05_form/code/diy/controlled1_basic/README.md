# React 受控输入框基础示例

这是一个基于 React 和 Create React App 的示例项目，展示受控输入框的基本用法。

## 示例功能

- 输入框的内容由 React 组件状态管理。
- 输入时，状态会随输入内容同步更新。
- 提交表单时会阻止页面默认刷新，并将当前输入值输出到浏览器开发者工具控制台。

## 启动项目

需要安装 Node.js 和 npm。在项目根目录执行：

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

- `src/App.js`：受控输入框和表单提交逻辑。
- `src/index.js`：React 应用入口。
- `public/index.html`：HTML 页面模板。