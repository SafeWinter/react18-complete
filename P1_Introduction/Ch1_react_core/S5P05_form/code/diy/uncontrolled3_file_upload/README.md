# React 非受控文件上传示例

这是一个基于 React 和 Create React App 的示例项目，演示如何通过 `ref` 读取非受控文件输入框中选择的文件。

## 示例功能

- 使用文件选择框选择一个文件。
- 点击“提交”后，将所选文件对象输出到浏览器开发者工具的控制台。

## 启动项目

需要先安装 Node.js 和 npm。在项目根目录运行：

```bash
npm install
npm start
```

开发服务器启动后，在浏览器中打开终端显示的本地地址。选择文件并点击“提交”，即可在开发者工具控制台查看结果。

## 可用命令

```bash
npm start      # 启动开发服务器
npm test       # 运行测试
npm run build  # 构建生产版本
```

## 主要文件

- `src/App.js`：文件上传示例组件。
- `src/index.js`：React 应用入口。
- `public/index.html`：HTML 页面模板。