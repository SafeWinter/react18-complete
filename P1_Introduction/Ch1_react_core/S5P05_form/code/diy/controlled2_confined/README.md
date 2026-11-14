# React 受控组件输入限制示例

这是一个基于 React 和 Create React App 的示例项目，演示如何通过受控组件限制输入内容。

## 示例功能

页面包含两个受控输入框：

- 第一个输入框会将输入内容转换为大写。
- 第二个输入框只保留数字字符，其他字符会被过滤。
- 点击“提交”后，表单会阻止默认提交行为，并将两个输入框的状态输出到浏览器开发者工具控制台。

## 启动项目

需要安装 Node.js 和 npm。在项目根目录执行：

```bash
npm install
npm start
```

开发服务器启动后，在浏览器中打开终端显示的本地地址。

## 可用命令

```bash
npm start      # 启动开发服务器
npm test       # 运行测试
npm run build  # 构建生产版本
```

## 主要文件

- `src/App.js`：受控输入框和输入处理逻辑。
- `src/index.js`：React 应用入口。
- `public/index.html`：HTML 页面模板。